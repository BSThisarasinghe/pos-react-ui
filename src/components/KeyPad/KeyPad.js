import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

//MUI components
import withStyles from '@material-ui/core/es/styles/withStyles';
import {Grid, Paper, TextField} from "@material-ui/core";

//Custom Components
import KeyPadButton from "../Button/KeyPadButton/KeyPadButton";
import BarCodeKeyButton from "../Button/KeyPadButton/BarCodeKeyButton";
import BarcodeReader from "react-barcode-reader";
import {_} from "../../internal/framework";

const styles = theme => ({
    root: {},
    fieldContainer: {
        height: "75px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px"
    },
    itemContainer: {
        height: "75px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px"
    },
    minusButtonContainer: {
        height: "65px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "150%",
        padding: "5px"
    },
    plusButtonContainer: {
        height: "140px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "150%",
        padding: "5px"
    },
    payButtonContainer: {
        height: "140px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "150%",
        padding: "5px"
    },
    barCodeButtonContainer: {
        height: "65px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "150%",
        padding: "5px"
    },
    barCodeField: {
        width: "100%"
    },
});

const KeyPad = props => {

    const {
        classes,
        barCodeFieldCallback,
        changeBarcodeCallback,
        keyPressedCallback,
        inputFieldSelectCallback,
        itemCount,
        payCallback,
        barcode
    } = props;

    const useFocus = () => {
        const htmlElRef = useRef(null)
        const setFocus = () => {
            return htmlElRef.current && htmlElRef.current.focus()
        }

        return [htmlElRef, setFocus]
    }

    const [barcodeRef, setBarcodeRef] = useFocus()

    const handleSelect = value => {
        inputFieldSelectCallback(value);
    }

    useEffect(() => {
        const keyPressHandler = e => {
            const pressedKey = e.key;

            switch (pressedKey) {
                case 'Pay':
                    payCallback()
                    break;
                default:
                    keyPressedCallback(pressedKey)
                    break;
            }
        };

        document.addEventListener('keyPad', keyPressHandler);
        return () => {
            document.removeEventListener('keyPad', keyPressHandler);
        };
    }, []);

    useEffect(() => {
        barCodeFieldCallback(barcode);
    }, [barcode]);

    const barCodeButtonClickHandler = () => {
        setBarcodeRef();
        changeBarcodeCallback('');
    };

    const barCodeOnScanHandler = (barcode) => {
        changeBarcodeCallback(barcode);
        barCodeFieldCallback(barcode);
    };

    const barCodeOnErrorHandler = (err) => {
        console.log(`Error occurred while scanning the barcode ${err}`)
    };

    return (
        <Grid container className={classes.root}>
            <Grid item container xs={12}>
                <Grid item xs={3} className={classes.itemContainer}>
                    <KeyPadButton label={"CE"}/>
                </Grid>
                <Grid item xs={3} className={classes.itemContainer}>
                    <KeyPadButton label={"C"}/>
                </Grid>
                <Grid item xs={3} className={classes.itemContainer}>
                    <KeyPadButton label={"*"}/>
                </Grid>
                <Grid item xs={3}>
                    <div className={classes.minusButtonContainer}>
                        <KeyPadButton label={"-"}/>
                    </div>
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item container xs={9}>
                    <Grid item container xs={12}>
                        <Grid item xs={4} className={classes.itemContainer}>
                            <KeyPadButton label={"7"}/>
                        </Grid>
                        <Grid item xs={4} className={classes.itemContainer}>
                            <KeyPadButton label={"8"}/>
                        </Grid>
                        <Grid item xs={4} className={classes.itemContainer}>
                            <KeyPadButton label={"9"}/>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12}>
                        <Grid item xs={4} className={classes.itemContainer}>
                            <KeyPadButton label={"4"}/>
                        </Grid>
                        <Grid item xs={4} className={classes.itemContainer}>
                            <KeyPadButton label={"5"}/>
                        </Grid>
                        <Grid item xs={4} className={classes.itemContainer}>
                            <KeyPadButton label={"6"}/>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item container xs={3}>
                    <Grid item xs={12}>
                        <div className={classes.plusButtonContainer}>
                            <KeyPadButton label={"+"}/>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container xs={12}>
                <Grid item container xs={9}>

                    <Grid item container xs={12}>
                        <Grid item xs={4} className={classes.itemContainer}>
                            <KeyPadButton label={"1"}/>
                        </Grid>
                        <Grid item xs={4} className={classes.itemContainer}>
                            <KeyPadButton label={"2"}/>
                        </Grid>
                        <Grid item xs={4} className={classes.itemContainer}>
                            <KeyPadButton label={"3"}/>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12}>
                        <Grid item xs={8} className={classes.itemContainer}>
                            <KeyPadButton label={"0"}/>
                        </Grid>
                        <Grid item xs={4} className={classes.itemContainer}>
                            <KeyPadButton label={"."}/>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item container xs={3}>
                    <Grid item xs={12}>
                        <div className={classes.payButtonContainer}>
                            <KeyPadButton label={"Pay"}/>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container xs={12}>
                <Grid item xs={6} className={classes.fieldContainer}>
                    <BarcodeReader
                        onError={barCodeOnErrorHandler}
                        onScan={barCodeOnScanHandler}
                    />
                    <TextField
                        id="barcode"
                        label="Barcode"
                        variant="outlined"
                        value={barcode}
                        inputProps={{ref: barcodeRef}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        autoComplete='off'
                        onSelect={() => handleSelect("barcode")}
                        className={classes.barCodeField}
                    />
                </Grid>
                <Grid item xs={3} className={classes.fieldContainer}>
                    <TextField
                        id="count"
                        label="Count"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        autoComplete='off'
                        onSelect={() => handleSelect("count")}
                        value={itemCount}
                    />
                </Grid>
                <Grid item xs={3}>
                    <div className={classes.barCodeButtonContainer}>
                        <BarCodeKeyButton barCodeButtonCallback={barCodeButtonClickHandler}/>
                    </div>
                </Grid>
            </Grid>

        </Grid>
    );
};

KeyPad.propTypes = {
    classes: PropTypes.object.isRequired,
    barCodeFieldCallback: PropTypes.func.isRequired,
    increaseItemCountCallback: PropTypes.func.isRequired,
    decreaseItemCountCallback: PropTypes.func.isRequired,
    keyPressedCallback: PropTypes.func.isRequired,
    changeBarcodeCallback: PropTypes.func.isRequired,
    payCallback: PropTypes.func.isRequired,
    inputFieldSelectCallback: PropTypes.func.isRequired,
    itemCount: PropTypes.number.isRequired,
    selectedField: PropTypes.string.isRequired,
    barcode: PropTypes.string.isRequired,
};

export default withStyles(styles)(KeyPad);
