import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

//MUI components
import withStyles from '@material-ui/core/es/styles/withStyles';
import {Grid} from "@material-ui/core";

import {CASH_COIN_SELECTOR_KEYPAD_PREFIX, PAYMENT_KEYPAD_PREFIX} from "../../utils/constants";

//Custom Components
import CashCoinKeyPadButton from "../Button/KeyPadButton/CashCoinKeyPadButton";

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: "100%"
    },
    itemContainer: {
        height: "75px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px"
    }
});

const CashCoinSelectorKeypad = props => {

    const {
        classes,
        onCashCoinSelectorKeyPadPressedCallback
    } = props;

    useEffect(() => {
        const keyPressHandler = e => {
            const pressedKey = e.key;

            switch (pressedKey) {
                case `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-0`:
                    onCashCoinSelectorKeyPadPressedCallback('0')
                    break;
                case `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-1`:
                    onCashCoinSelectorKeyPadPressedCallback('1')
                    break;
                case `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-2`:
                    onCashCoinSelectorKeyPadPressedCallback('2')
                    break;
                case `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-3`:
                    onCashCoinSelectorKeyPadPressedCallback('3')
                    break;
                case `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-4`:
                    onCashCoinSelectorKeyPadPressedCallback('4')
                    break;
                case `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-5`:
                    onCashCoinSelectorKeyPadPressedCallback('5')
                    break;
                case `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-6`:
                    onCashCoinSelectorKeyPadPressedCallback('6')
                    break;
                case `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-7`:
                    onCashCoinSelectorKeyPadPressedCallback('7')
                    break;
                case `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-8`:
                    onCashCoinSelectorKeyPadPressedCallback('8')
                    break;
                case `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-9`:
                    onCashCoinSelectorKeyPadPressedCallback('9')
                    break;
                case `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-.`:
                    onCashCoinSelectorKeyPadPressedCallback('.')
                    break;
                case `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-CE`:
                    onCashCoinSelectorKeyPadPressedCallback('CE')
                    break;
                case `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-C`:
                    onCashCoinSelectorKeyPadPressedCallback('C')
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('cashCoinKeyPad', keyPressHandler);
        return () => {
            document.removeEventListener('cashCoinKeyPad', keyPressHandler);
        };
    }, []);

    return (
        <Grid container className={classes.root}>
            <Grid item container xs={12}>
                <Grid item container xs={12}>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <CashCoinKeyPadButton label={"7"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <CashCoinKeyPadButton label={"8"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <CashCoinKeyPadButton label={"9"}/>
                    </Grid>
                </Grid>
                <Grid item container xs={12}>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <CashCoinKeyPadButton label={"4"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <CashCoinKeyPadButton label={"5"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <CashCoinKeyPadButton label={"6"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item container xs={12}>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <CashCoinKeyPadButton label={"1"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <CashCoinKeyPadButton label={"2"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <CashCoinKeyPadButton label={"3"}/>
                    </Grid>
                </Grid>
                <Grid item container xs={12}>
                    <Grid item xs={8} className={classes.itemContainer}>
                        <CashCoinKeyPadButton label={"0"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <CashCoinKeyPadButton label={"CE"}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

CashCoinSelectorKeypad.propTypes = {
    classes: PropTypes.object.isRequired,
    onCashCoinSelectorKeyPadPressedCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(CashCoinSelectorKeypad);
