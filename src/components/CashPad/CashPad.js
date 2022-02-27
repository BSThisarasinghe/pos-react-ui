import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

//MUI components
import withStyles from '@material-ui/core/es/styles/withStyles';
import {Grid} from "@material-ui/core";

//Custom Components
import KeyPadButton from "../Button/KeyPadButton/KeyPadButton";
import CashPadButton from "../Button/CashPadButton/CashPadButton";

import twentyFiveCent from "../../../public/images/cash/25-cent.jpg";
import fiftyCent from "../../../public/images/cash/50-cent.jpg";
import oneRupee from "../../../public/images/cash/1-rupee.jpg";
import twoRupee from "../../../public/images/cash/2-rupee.jpg";
import fiveRupee from "../../../public/images/cash/5-rupee.jpg";
import tenRupee from "../../../public/images/cash/10-rupee.jpg";
import twentyRupee from "../../../public/images/cash/20-rupee.jpg";
import fiftyRupeeNote from "../../../public/images/cash/50-rupee-note.jpeg";
import hundredRupeeNote from "../../../public/images/cash/100-rupee-note.jpeg";
import twoHundredRupeeNote from "../../../public/images/cash/200-rupee-note.jpg";
import fiveHundredRupeeNote from "../../../public/images/cash/500-rupee-note.jpeg";
import thousandRupeeNote from "../../../public/images/cash/1000-rupee-note.jpg";
import fiveThousandRupeeNote from "../../../public/images/cash/5000-rupee-note.jpg";
import {CASH_KEYPAD_PREFIX} from "../../utils/constants";

const styles = theme => ({
    itemContainer: {
        height: "75px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3px"
    }
});

const CashPad = props => {

    const {
        classes,
        cashPadKeyCallback
    } = props;

    useEffect(() => {
        const keyPressHandler = e => {
            const pressedKey = e.key;

            switch (pressedKey) {
                case `${CASH_KEYPAD_PREFIX}-0.25`:
                    cashPadKeyCallback('0.25')
                    break;
                case `${CASH_KEYPAD_PREFIX}-0.50`:
                    cashPadKeyCallback('0.50')
                    break;
                case `${CASH_KEYPAD_PREFIX}-1`:
                    cashPadKeyCallback('1')
                    break;
                case `${CASH_KEYPAD_PREFIX}-2`:
                    cashPadKeyCallback('2')
                    break;
                case `${CASH_KEYPAD_PREFIX}-5`:
                    cashPadKeyCallback('5')
                    break;
                case `${CASH_KEYPAD_PREFIX}-10`:
                    cashPadKeyCallback('10')
                    break;
                case `${CASH_KEYPAD_PREFIX}-20`:
                    cashPadKeyCallback('20')
                    break;
                case `${CASH_KEYPAD_PREFIX}-50`:
                    cashPadKeyCallback('50')
                    break;
                case `${CASH_KEYPAD_PREFIX}-100`:
                    cashPadKeyCallback('100')
                    break;
                case `${CASH_KEYPAD_PREFIX}-200`:
                    cashPadKeyCallback('200')
                    break;
                case `${CASH_KEYPAD_PREFIX}-500`:
                    cashPadKeyCallback('500')
                    break;
                case `${CASH_KEYPAD_PREFIX}-1000`:
                    cashPadKeyCallback('1000')
                    break;
                case `${CASH_KEYPAD_PREFIX}-5000`:
                    cashPadKeyCallback('5000')
                    break;
            }


        };

        document.addEventListener('cashPad', keyPressHandler);
        return () => {
            document.removeEventListener('cashPad', keyPressHandler);
        };
    }, []);

    return (
        <Grid container className={classes.root}>
            <Grid item container xs={12}>
                <Grid item xs={3} className={classes.itemContainer}>
                    <CashPadButton label={"0.25"} image={twentyFiveCent}/>
                </Grid>
                <Grid item xs={3} className={classes.itemContainer}>
                    <CashPadButton label={"0.50"} image={fiftyCent}/>
                </Grid>
                <Grid item xs={3} className={classes.itemContainer}>
                    <CashPadButton label={"1"} image={oneRupee}/>
                </Grid>
                <Grid item xs={3} className={classes.itemContainer}>
                    <CashPadButton label={"2"} image={twoRupee}/>
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={3} className={classes.itemContainer}>
                    <CashPadButton label={"5"} image={fiveRupee}/>
                </Grid>
                <Grid item xs={3} className={classes.itemContainer}>
                    <CashPadButton label={"10"} image={tenRupee}/>
                </Grid>
                <Grid item xs={3} className={classes.itemContainer}>
                    <CashPadButton label={"20"} image={twentyRupee}/>
                </Grid>
                <Grid item xs={3} className={classes.itemContainer}>
                    <CashPadButton label={"50"} image={fiftyRupeeNote} imageVariant={"square"}/>
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={3} className={classes.itemContainer}>
                    <CashPadButton label={"100"} image={hundredRupeeNote} imageVariant={"square"}/>
                </Grid>
                <Grid item xs={3} className={classes.itemContainer}>
                    <CashPadButton label={"200"} image={twoHundredRupeeNote} imageVariant={"square"}/>
                </Grid>
                <Grid item xs={3} className={classes.itemContainer}>
                    <CashPadButton label={"500"} image={fiveHundredRupeeNote} imageVariant={"square"}/>
                </Grid>
                <Grid item xs={3} className={classes.itemContainer}>
                    <CashPadButton label={"1000"} image={thousandRupeeNote} imageVariant={"square"}/>
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={3} className={classes.itemContainer}>
                    <CashPadButton label={"5000"} image={fiveThousandRupeeNote} imageVariant={"square"}/>
                </Grid>
            </Grid>
        </Grid>
    );
};

CashPad.propTypes = {
    classes: PropTypes.object.isRequired,
    barCodeFieldCallback: PropTypes.func.isRequired,
    increaseItemCountCallback: PropTypes.func.isRequired,
    decreaseItemCountCallback: PropTypes.func.isRequired,
    cashPadKeyCallback: PropTypes.func.isRequired,

};

export default withStyles(styles)(CashPad);
