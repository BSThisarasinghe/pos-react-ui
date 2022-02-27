import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

//MUI components
import withStyles from '@material-ui/core/es/styles/withStyles';
import {Grid} from "@material-ui/core";

import {PAYMENT_KEYPAD_PREFIX} from "../../utils/constants";

//Custom Components
import PaymentKeyPadButton from "../Button/KeyPadButton/PaymentKeyPadButton";

const styles = theme => ({
    itemContainer: {
        height: "75px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px"
    }
});

const PaymentKeyPad = props => {

    const {
        classes,
        onPaymentKeyPadPressedCallback
    } = props;

    useEffect(() => {
        const keyPressHandler = e => {
            const pressedKey = e.key;

            switch (pressedKey) {
                case `${PAYMENT_KEYPAD_PREFIX}-0`:
                    onPaymentKeyPadPressedCallback('0')
                    break;
                case `${PAYMENT_KEYPAD_PREFIX}-1`:
                    onPaymentKeyPadPressedCallback('1')
                    break;
                case `${PAYMENT_KEYPAD_PREFIX}-2`:
                    onPaymentKeyPadPressedCallback('2')
                    break;
                case `${PAYMENT_KEYPAD_PREFIX}-3`:
                    onPaymentKeyPadPressedCallback('3')
                    break;
                case `${PAYMENT_KEYPAD_PREFIX}-4`:
                    onPaymentKeyPadPressedCallback('4')
                    break;
                case `${PAYMENT_KEYPAD_PREFIX}-5`:
                    onPaymentKeyPadPressedCallback('5')
                    break;
                case `${PAYMENT_KEYPAD_PREFIX}-6`:
                    onPaymentKeyPadPressedCallback('6')
                    break;
                case `${PAYMENT_KEYPAD_PREFIX}-7`:
                    onPaymentKeyPadPressedCallback('7')
                    break;
                case `${PAYMENT_KEYPAD_PREFIX}-8`:
                    onPaymentKeyPadPressedCallback('8')
                    break;
                case `${PAYMENT_KEYPAD_PREFIX}-9`:
                    onPaymentKeyPadPressedCallback('9')
                    break;
                case `${PAYMENT_KEYPAD_PREFIX}-.`:
                    onPaymentKeyPadPressedCallback('.')
                    break;
                case `${PAYMENT_KEYPAD_PREFIX}-CE`:
                    onPaymentKeyPadPressedCallback('CE')
                    break;
                case `${PAYMENT_KEYPAD_PREFIX}-C`:
                    onPaymentKeyPadPressedCallback('C')
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('paymentKeyPad', keyPressHandler);
        return () => {
            document.removeEventListener('paymentKeyPad', keyPressHandler);
        };
    }, []);

    return (
        <Grid container className={classes.root}>
            <Grid item container xs={12}>
                <Grid item xs={8} className={classes.itemContainer}>
                    <PaymentKeyPadButton label={"CE"}/>
                </Grid>
                <Grid item xs={4} className={classes.itemContainer}>
                    <PaymentKeyPadButton label={"C"}/>
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item container xs={12}>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <PaymentKeyPadButton label={"7"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <PaymentKeyPadButton label={"8"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <PaymentKeyPadButton label={"9"}/>
                    </Grid>
                </Grid>
                <Grid item container xs={12}>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <PaymentKeyPadButton label={"4"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <PaymentKeyPadButton label={"5"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <PaymentKeyPadButton label={"6"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item container xs={12}>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <PaymentKeyPadButton label={"1"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <PaymentKeyPadButton label={"2"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <PaymentKeyPadButton label={"3"}/>
                    </Grid>
                </Grid>
                <Grid item container xs={12}>
                    <Grid item xs={8} className={classes.itemContainer}>
                        <PaymentKeyPadButton label={"0"}/>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContainer}>
                        <PaymentKeyPadButton label={"."}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

PaymentKeyPad.propTypes = {
    classes: PropTypes.object.isRequired,
    onPaymentKeyPadPressedCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(PaymentKeyPad);
