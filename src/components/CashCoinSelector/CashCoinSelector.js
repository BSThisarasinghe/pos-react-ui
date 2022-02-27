import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';

//MUI components
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from "@material-ui/core/Grid";

import {_} from '../../internal/framework';

import Button from "@material-ui/core/Button";

import produce from "immer";
import CashCoinSelectorKeypad from "../CashCoinSelectorKeyPad/CashCoinSelectorKeypad";
import {Paper, TextField} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import CashCoinSelectorWidget from "./CashCoinSelectorWidget/CashCoinSelectorWidget";
import actions from 'Actions';

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        height: 360,
        paddingLeft: 30,
        marginTop: 20
    },
    header: {
        backgroundColor: "#e0e0e0"
    },
    keyPadContainer: {
        height: "fit-content",
    },
    typography: {
        fontFamily: '-apple-system',
        fontSize: 20,
    },
    cancelButton: {
        margin: theme.spacing(1),
        height: "60px",
        backgroundColor: "#ffcdd2",
        float: 'left',
        width: "90%",
    },
    openDrawerButton: {
        margin: theme.spacing(1),
        height: "60px",
        backgroundColor: "#2196f3",
        float: 'right',
        width: "90%",
    },
    saveButton: {
        margin: theme.spacing(1),
        height: "60px",
        backgroundColor: "#80CBC4",
        float: 'right',
        width: "90%",
    },
    widgetContainer: {
        paddingTop: 5
    },
    keyPadSectionHolder: {
        width: 250,
    },
    keyPadSectionRoot: {
        display: "flex",
        justifyContent: "flex-center"
    },
    buttonHolder: {
        paddingTop: 100,
        paddingRight: 73
    },
    cashInAmountField: {
        width: "100%"
    },
    input: {
        backgroundColor: "white",
        height: 60,
        fontSize: 25,
        marginTop: 30,
    },
    keyPadSectionPaper: {
        padding: 10
    }
});


const CashCoinSelector = props => {

    const dispatch = useDispatch();

    const {
        classes,
        history,
    } = props;

    const [state, setState] = useState({
        amount: 0.0,
        selected: '',
        widgets: [
            {
                label: '0.25',
                count: '0'
            },
            {
                label: '0.50',
                count: '0'
            },
            {
                label: '1',
                count: '0'
            },
            {
                label: '2',
                count: '0'
            },
            {
                label: '5',
                count: '0'
            },
            {
                label: '10',
                count: '0'
            },
            {
                label: '20',
                count: '0'
            },
            {
                label: '50',
                count: '0'
            },
            {
                label: '100',
                count: '0'
            },
            {
                label: '200',
                count: '0'
            },
            {
                label: '500',
                count: '0'
            },
            {
                label: '1000',
                count: '0'
            },
            {
                label: '5000',
                count: '0'
            },
        ]
    });

    const handleCashCoinSelectorKeyPadPressed = useCallback((value) => {
        setState(
            produce((draft) => {
                const selectedWidget = draft.widgets.find((widget) => widget.label === draft.selected);

                if(!selectedWidget){
                    return;
                }

                const oldCount = parseInt(selectedWidget.count);

                switch (value) {
                    case 'CE':
                        selectedWidget.count = selectedWidget.count.slice(0, -1)
                        if (!selectedWidget.count) selectedWidget.count = '0';
                        break
                    default:
                        selectedWidget.count = selectedWidget.count.concat(value);
                        break;
                }
                if (selectedWidget.count === "") {
                    draft.amount = draft.amount + 0.0;
                    return;
                }
                draft.amount = draft.amount + parseFloat(selectedWidget.label) * (parseInt(selectedWidget.count) - oldCount);
            })
        );
    }, []);

    const onCancelHandler = () => {
        history.push(history.location.state.originPath)
    }

    const handleOnOpenDrawer = () => {
        dispatch(actions.cashDrawer.openCashDrawer());
    }

    const handleOnSave = () => {
        history.push({
            pathname: history.location.state.originPath,
            state: {
                amount: state.amount
            }
        });
    }


    const handleTextFieldSelection = useCallback((event) => {
        setState(
            produce((draft) => {
                if (event.target) {
                    draft.selected = event.target.id;
                }
            })
        );
    }, []);


    const onCashCoinWidgetChangeHandler = useCallback((value) => {
        setState(produce((draft) => {
            draft.selected = value.label;

            const selectedWidget = draft.widgets.find((widget) => widget.label === draft.selected);

            const count = parseInt(selectedWidget.count);

            switch (value.action) {
                case "INCREMENT":
                    selectedWidget.count = (count + 1).toString();
                    draft.amount = draft.amount + parseFloat(value.label)
                    break;
                case "DECREMENT":
                    if (selectedWidget.count > 0) {
                        selectedWidget.count = (count - 1).toString();

                        const newAmount = draft.amount - parseFloat(value.label);
                        if (newAmount >= 0) {
                            draft.amount = newAmount;
                        }
                    }
                    break;
                default:
                    break;
            }
        }));
    }, []);


    return <div className={classes.root}>
        <Grid container spacing={1}>
            <Grid container spacing={2}>
                <Grid container item xs={8}>
                    <Grid container className={classes.widgetContainer}>
                        <Grid container item xs={6}>
                            <CashCoinSelectorWidget
                                label={"0.25"}
                                count={_.find(state.widgets, ['label', '0.25']).count}
                                onTextFieldSelectionCallback={handleTextFieldSelection}
                                onCashCoinChangeCallback={onCashCoinWidgetChangeHandler}
                            />
                        </Grid>
                        <Grid container item xs={6}>
                            <CashCoinSelectorWidget
                                label={"50"}
                                count={_.find(state.widgets, ['label', '50']).count}
                                onTextFieldSelectionCallback={handleTextFieldSelection}
                                onCashCoinChangeCallback={onCashCoinWidgetChangeHandler}/>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.widgetContainer}>
                        <Grid container item xs={6}>
                            <CashCoinSelectorWidget
                                label={"0.50"}
                                count={_.find(state.widgets, ['label', '0.50']).count}
                                onTextFieldSelectionCallback={handleTextFieldSelection}
                                onCashCoinChangeCallback={onCashCoinWidgetChangeHandler}
                            />
                        </Grid>
                        <Grid container item xs={6}>
                            <CashCoinSelectorWidget
                                label={"100"}
                                count={_.find(state.widgets, ['label', '100']).count}
                                onTextFieldSelectionCallback={handleTextFieldSelection}
                                onCashCoinChangeCallback={onCashCoinWidgetChangeHandler}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.widgetContainer}>
                        <Grid container item xs={6}>
                            <CashCoinSelectorWidget
                                label={"1"}
                                count={_.find(state.widgets, ['label', '1']).count}
                                onTextFieldSelectionCallback={handleTextFieldSelection}
                                onCashCoinChangeCallback={onCashCoinWidgetChangeHandler}
                            />
                        </Grid>
                        <Grid container item xs={6}>
                            <CashCoinSelectorWidget
                                label={"500"}
                                count={_.find(state.widgets, ['label', '500']).count}
                                onTextFieldSelectionCallback={handleTextFieldSelection}
                                onCashCoinChangeCallback={onCashCoinWidgetChangeHandler}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.widgetContainer}>
                        <Grid container item xs={6}>
                            <CashCoinSelectorWidget
                                label={"2"}
                                count={_.find(state.widgets, ['label', '2']).count}
                                onTextFieldSelectionCallback={handleTextFieldSelection}
                                onCashCoinChangeCallback={onCashCoinWidgetChangeHandler}
                            />
                        </Grid>
                        <Grid container item xs={6}>
                            <CashCoinSelectorWidget
                                label={"1000"}
                                count={_.find(state.widgets, ['label', '1000']).count}
                                onTextFieldSelectionCallback={handleTextFieldSelection}
                                onCashCoinChangeCallback={onCashCoinWidgetChangeHandler}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.widgetContainer}>
                        <Grid container item xs={6}>
                            <CashCoinSelectorWidget
                                label={"5"}
                                count={_.find(state.widgets, ['label', '5']).count}
                                onTextFieldSelectionCallback={handleTextFieldSelection}
                                onCashCoinChangeCallback={onCashCoinWidgetChangeHandler}
                            />
                        </Grid>
                        <Grid container item xs={6}>
                            <CashCoinSelectorWidget
                                label={"5000"}
                                count={_.find(state.widgets, ['label', '5000']).count}
                                onTextFieldSelectionCallback={handleTextFieldSelection}
                                onCashCoinChangeCallback={onCashCoinWidgetChangeHandler}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.widgetContainer}>
                        <Grid container item xs={6}>
                            <CashCoinSelectorWidget
                                label={"10"}
                                count={_.find(state.widgets, ['label', '10']).count}
                                onTextFieldSelectionCallback={handleTextFieldSelection}
                                onCashCoinChangeCallback={onCashCoinWidgetChangeHandler}
                            />
                        </Grid>
                        <Grid container item xs={6}>

                        </Grid>
                    </Grid>
                    <Grid container className={classes.widgetContainer}>
                        <Grid container item xs={6}>
                            <CashCoinSelectorWidget
                                label={"20"}
                                count={_.find(state.widgets, ['label', '20']).count}
                                onTextFieldSelectionCallback={handleTextFieldSelection}
                                onCashCoinChangeCallback={onCashCoinWidgetChangeHandler}
                            />
                        </Grid>
                        <Grid container item xs={6}>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={4} className={classes.keyPadSectionRoot}>
                    <div className={classes.keyPadSectionHolder}>
                        <Paper className={classes.keyPadSectionPaper} elevation={3}>
                            <CashCoinSelectorKeypad
                                onCashCoinSelectorKeyPadPressedCallback={(key) => handleCashCoinSelectorKeyPadPressed(key)}
                            />
                            <TextField
                                id="barcode"
                                variant="outlined"
                                value={`Rs.${state.amount.toFixed(2)}`}
                                InputProps={{className: classes.input}}
                                inputProps={{min: 0, style: {textAlign: 'right'}}}
                                className={classes.cashInAmountField}
                            />
                        </Paper>
                    </div>
                </Grid>
            </Grid>


            <Grid container className={classes.buttonHolder}>
                <Grid item xs={4}/>
                <Grid item container xs={8}>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            className={classes.cancelButton}
                            style={{fontSize: '15px'}}
                            size="large"
                            onClick={onCancelHandler}
                        >
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            className={classes.openDrawerButton}
                            style={{fontSize: '15px'}}
                            size="large"
                            onClick={handleOnOpenDrawer}
                        >
                            Open Drawer
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            className={classes.saveButton}
                            style={{fontSize: '15px'}}
                            size="large"
                            onClick={handleOnSave}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>;
};

CashCoinSelector.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default withRouter(connect()(withStyles(styles)(CashCoinSelector)))
