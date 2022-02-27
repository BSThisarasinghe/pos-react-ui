import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

//MUI components
import withStyles from '@material-ui/core/es/styles/withStyles';
import {Grid, Paper, TextField, Typography} from "@material-ui/core";
import CashPad from "../CashPad/CashPad";

const styles = theme => ({
    itemContainer: {
        height: 47,
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        paddingLeft: 22
    },
    typography: {
        fontFamily: '-apple-system',
        fontSize: 20,
    },
    summaryText: {
        width: "100%",
        textAlign: "left"
    },
    paidTextField: {
        width: "100%",
    },
    balanceTextField: {
        width: "100%",
    },
    input: {
        height: 35
    },
    cashPadContainer: {
        height: "fit-content",
    },
});

const CashPaymentSection = props => {

    const {
        classes,
        cashPadKeyCallback
    } = props;

    let {paid, balance} = props

    return (
        <Grid container className={classes.root}>
            <Grid item container xs={12}>
                <Grid item xs={3} className={classes.itemContainer}>
                    <div className={classes.summaryText}>
                        <Typography
                            className={classes.typography}
                            variant={"caption"}
                        >
                            Paid:
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={8} className={classes.itemContainer}>
                    <TextField
                        placeholder=""
                        variant="outlined"
                        value={paid ? parseFloat(paid).toFixed(2) : "0.00"}
                        InputProps={{className: classes.input}}
                        className={classes.paidTextField}
                    />
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={3} className={classes.itemContainer}>
                    <div className={classes.summaryText}>
                        <Typography
                            className={classes.typography}
                            variant={"caption"}
                        >
                            Balance:
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={8} className={classes.itemContainer}>
                    <TextField
                        placeholder=""
                        variant="outlined"
                        value={balance? parseFloat(balance).toFixed(2): "0.00"}
                        InputProps={{className: classes.input}}
                        className={classes.balanceTextField}
                    />
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Paper elevation={3} className={classes.cashPadContainer}>
                    <CashPad
                        cashPadKeyCallback={cashPadKeyCallback}
                    />
                </Paper>
            </Grid>
        </Grid>
    );
};

CashPaymentSection.propTypes = {
    classes: PropTypes.object.isRequired,
    paid: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    cashPadKeyCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(CashPaymentSection);
