import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

//MUI components
import withStyles from '@material-ui/core/styles/withStyles';
import Modal from "@material-ui/core/Modal";
import CardHeader from '@material-ui/core/CardHeader';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import {ListItem, Paper, TextField, Typography} from "@material-ui/core";
import PaymentKeyPad from "../PaymentKeyPad/PaymentKeyPad";
import CashPaymentSection from "../CashPaymentSection/CashPaymentSection";
import List from "@material-ui/core/List";

import {_} from '../../internal/framework';

import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import MoneyOutlinedIcon from '@material-ui/icons/MoneyOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import BallotIcon from '@material-ui/icons/Ballot';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Button from "@material-ui/core/Button";

import produce from "immer";
import bill from '../../redux/modules/bill';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: "100%",
        height: "100%",
    },
    header: {
        backgroundColor: "#e0e0e0"
    },
    summaryBar: {
        height: 40,
        paddingTop: 10,
        paddingLeft: 10,
        marginRight: 10,
        paddingBottom: 10,
        width: "100%",
    },
    keyPadContainer: {
        height: "fit-content",
    },
    paymentMethodContainer: {
        height: "fit-content",
    },
    modal: {
        "&:focus": {
            outline: "none"
        }
    },
    totalTextField: {
        width: "100%",
    },
    paymentKeyPadTextField: {
        width: "100%",
        paddingTop: 10
    },
    paidTextField: {
        width: "100%",
    },
    remainingTextField: {
        width: "100%",
    },
    input: {
        height: 35
    },
    typography: {
        fontFamily: '-apple-system',
        fontSize: 20,
    },
    summaryText: {
        width: "100%",
        textAlign: "right"
    },
    listElement: {
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
    },
    listElementContent: {
        padding: '0px !important',
        width: '100%',
        height: 61
    },
    cancelButton: {
        margin: theme.spacing(1),
        height: "60px",
        backgroundColor: "#EF9A9A",
        width: "90%",
    },
    okButton: {
        margin: theme.spacing(1),
        height: "60px",
        backgroundColor: "#80CBC4",
        width: "90%",
    },
    resetButton: {
        margin: theme.spacing(1),
        height: "60px",
        backgroundColor: "#FFCC80",
        width: "90%",
    },
});


const PaymentModal = props => {

    const [cashSectionPaid, setCashSectionPaid] = useState([
        {
            method: 'cash',
            amount: ''
        }
    ]);

    const [cashSectionBalance, setCashSectionBalance] = useState('');

    const [selected, setSelected] = useState('cash');

    const billTotal = useSelector(state => state.app.getIn(['bill', 'billTotal']));

    const handleSelect = value => {
        setSelected(value);
    };

    const handleCashKeyPadPressed = value => {

        setCashSectionPaid(produce((draft) => {
            const cashSectionPaidElement = draft.find((cashSectionPaidElement) => cashSectionPaidElement.method === 'cash');

            let paid = cashSectionPaidElement.amount === '' ? '0' : cashSectionPaidElement.amount;
            let balance;

            paid = (parseFloat(paid) + parseFloat(value)).toFixed(2)
            balance = parseFloat(paid) - total >= 0 ? (parseFloat(paid) - total).toFixed(2) : 0;
            setCashSectionBalance(balance.toString());

            cashSectionPaidElement.amount = paid;

            onPaymentKeyPadPressedCallback(
                cashPaidSum(draft)
            );
            
        }))
    }

    const handlePaymentKeyPadPressed = value => {

        setCashSectionPaid(cashSectionPaid => {
            const cashSectionPaidElement = _.find(cashSectionPaid, ['method', selected]);

            let paid = cashSectionPaidElement.amount;
            let balance;

            switch (value) {
                case 'CE':
                    paid = paid.slice(0, -1)
                    break
                case 'C':
                    paid = '';
                    break
                case '.':
                    if (!paid.includes('.')) {
                        paid = paid.concat('.');
                    }
                    break
                default:
                    let decimalPart = paid.includes('.') ? paid.split('.')[1] : '';

                    if (decimalPart.length < 2) {
                        paid = paid.concat(value);
                    }
                    break;
            }
            balance = parseFloat(paid) - total >= 0 ? (parseFloat(paid) - total).toFixed(2) : 0;

            cashSectionPaidElement.amount = paid;
            setCashSectionBalance(balance.toString());

            setCashSectionPaid(() => [
                {
                    method: selected,
                    amount: paid
                }
            ]);

            onPaymentKeyPadPressedCallback(
                cashPaidSum(cashSectionPaid)
            );
        });
    };

    const cashPaidSum = cashSectionPaid => {
        const sum = cashSectionPaid
            .map(cashSectionPaidElement => parseFloat(cashSectionPaidElement.amount))
            .reduce((a, b) => a + b, 0)

        if (isNaN(sum)) {
            return 0;
        }
        return sum;
    }

    const handleOnOk = () => {

        if (billTotal > 0) {
            onOkCallback(_.find(cashSectionPaid, ['method', selected]));
            clearValues();
        }        
    }

    const handleOnCancel = () => {
        onCancelCallback();
        clearValues();
    }

    const resetValues = () => {
        clearValues();
        onResetCallback();
    }

    const clearValues = () => {
        setCashSectionPaid(() => [
            {
                method: 'cash',
                amount: ''
            }
        ]);
        setCashSectionBalance(() => '');
    }

    const paymentTypes = [
        {
            name: 'cash',
            icon: <AttachMoneyOutlinedIcon/>
        },
        {
            name: 'voucher',
            icon: <MoneyOutlinedIcon/>
        },
        {
            name: 'cheque',
            icon: <BorderColorIcon/>
        },
        {
            name: 'card',
            icon: <CreditCardOutlinedIcon/>
        },
        {
            name: 'debt',
            icon: <BallotIcon/>
        },
        {
            name: 'stamp',
            icon: <MonetizationOnIcon/>
        }
    ];

    const {
        classes,
        isOpen,
        onOkCallback,
        onCancelCallback,
        onResetCallback,
        onPaymentKeyPadPressedCallback
    } = props;

    let {total, paid, remaining} = props

    return <Modal
        open={isOpen}
        className={classes.modal}
    >
        <div className={classes.root}>
            <Card>
                <CardHeader
                    title={"Payment"}
                    elevation={3}
                    className={classes.header}
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item container>
                            <Paper elevation={3} className={classes.summaryBar}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                        <div className={classes.summaryText}>
                                            <Typography
                                                className={classes.typography}
                                                variant={"caption"}
                                            >
                                                Total:
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField
                                            placeholder=""
                                            value={total ? total.toFixed(2) : "0.00"}
                                            variant="outlined"
                                            InputProps={{className: classes.input}}
                                            className={classes.totalTextField}
                                        />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <div className={classes.summaryText}>
                                            <Typography
                                                className={classes.typography}
                                                variant={"caption"}
                                            >
                                                Paid:
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField
                                            placeholder=""
                                            value={paid ? paid.toFixed(2) : "0.00"}
                                            variant="outlined"
                                            InputProps={{className: classes.input}}
                                            className={classes.paidTextField}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div className={classes.summaryText}>
                                            <Typography
                                                className={classes.typography}
                                                variant={"caption"}
                                            >
                                                Remaining:
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField
                                            placeholder=""
                                            value={remaining ? remaining.toFixed(2) : "0.00"}
                                            variant="outlined"
                                            InputProps={{className: classes.input}}
                                            className={classes.remainingTextField}
                                        />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <List dense component="div" role="list">
                                {paymentTypes.map(paymentType => {
                                    return <ListItem
                                        button
                                        className={classes.listElement}
                                        onClick={() => handleSelect(paymentType.name)}
                                    >
                                        <Card
                                            className={classes.listElementContent}
                                            style={selected === paymentType.name ? {backgroundColor: "#81d4fa"} : {backgroundColor: "#e0e0e0"}}
                                        >
                                            <CardContent>
                                                <Grid item container>
                                                    <Grid item xs={4}>
                                                        {paymentType.icon}
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Typography variant="h6" component="h3">
                                                            {_.upperFirst(paymentType.name)}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </ListItem>
                                })}
                            </List>
                        </Grid>
                        <Grid item xs={5}>
                            <Paper elevation={3} className={classes.paymentMethodContainer}>
                                {selected === 'cash' ?
                                    <CashPaymentSection
                                        paid={_.find(cashSectionPaid, ['method', 'cash']).amount}
                                        balance={cashSectionBalance}
                                        cashPadKeyCallback={(key) => handleCashKeyPadPressed(key)}
                                    /> :
                                    null}
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid item>
                                <Paper elevation={3} className={classes.keyPadContainer}>
                                    <PaymentKeyPad
                                        onPaymentKeyPadPressedCallback={(key) => handlePaymentKeyPadPressed(key)}/>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <TextField
                                    placeholder=""
                                    value={cashPaidSum(cashSectionPaid)}
                                    variant="outlined"
                                    InputProps={{className: classes.input}}
                                    className={classes.paymentKeyPadTextField}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={4}/>
                        <Grid item container xs={8}>
                            <Grid item xs={4}>
                                <Button
                                    variant="contained"
                                    className={classes.okButton}
                                    style={{fontSize: '15px'}}
                                    size="large"
                                    onClick={handleOnOk}
                                >
                                    Ok
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    variant="contained"
                                    className={classes.cancelButton}
                                    style={{fontSize: '15px'}}
                                    size="large"
                                    onClick={handleOnCancel}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    variant="contained"
                                    className={classes.resetButton}
                                    style={{fontSize: '15px'}}
                                    size="large"
                                    onClick={resetValues}
                                >
                                    Reset
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    </Modal>;
};

PaymentModal.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onOkCallback: PropTypes.func.isRequired,
    onCancelCallback: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    paid: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
    onPaymentKeyPadPressedCallback: PropTypes.func.isRequired,
    onCashPadPressedCallback: PropTypes.func.isRequired,
    onResetCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(PaymentModal);
