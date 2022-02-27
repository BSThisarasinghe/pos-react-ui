import React from "react";
import PropTypes from "prop-types";

//Material UI
import {Button, Grid, TextField, Typography, withStyles} from "@material-ui/core";

const styles = () => {
    return ({
        root: {
            flexGrow: 1,
            paddingTop: 15
        },
        imageContainer: {
            textAlign: "-webkit-center"
        },
        avatar: {
            height: "100%",
            width: "100%",
        },
        cashInAmountField: {
            width: "85%",
            paddingLeft: 18

        },
        input: {
            backgroundColor: "white",
            height: 50,
            fontSize: 30,
        },
        typography: {
            fontFamily: '-apple-system',
            fontSize: 30,
            position: "absolute",
            top: "50%",
            msTransform: "translateY(-50%)",
            transform: "translateY(-50%)"
        },
        labelText:{
            fontFamily: '-apple-system',
            fontSize: 15,
            position: "absolute",
            msTransform: "translateY(-50%)",
            transform: "translateY(-50%)",
        },
        button: {
            width: 50,
            height: 50,
            marginLeft: 5,
            marginRight: 5
        },
        labelTextHolder:{
            paddingTop: 40,
            textAlign: "left",
        }
    });
};

const CashCoinSelectorWidget = props => {

    const {classes, label, onCashCoinChangeCallback, onTextFieldSelectionCallback, count} = props;

    const handleIncrement = () => {
        onCashCoinChangeCallback({
            label,
            action: "INCREMENT"
        });
    }

    const handleDecrement = () => {
        onCashCoinChangeCallback({
            label,
            action: "DECREMENT"
        });
    }

    return (
        <Grid container lassName={classes.root}>
            <Grid item xs={2} >
                <div className={classes.labelTextHolder}>
                    <Typography
                        className={classes.labelText}
                        variant={"caption"}
                    >
                        {`Rs.${label}`}
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    onClick={handleDecrement}
                >
                    <Typography
                        className={classes.typography}
                        variant={"caption"}
                    >
                        -
                    </Typography>
                </Button>
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id={label}
                    variant="outlined"
                    InputProps={{className: classes.input}}
                    inputProps={{min: 0, style: {textAlign: 'right'}}}
                    className={classes.cashInAmountField}
                    value={count}
                    onSelect={onTextFieldSelectionCallback}
                />
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    onClick={handleIncrement}
                >
                    <Typography
                        className={classes.typography}
                        variant={"caption"}
                    >
                        +
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    );
};

CashCoinSelectorWidget.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    onCashCoinChangeCallback: PropTypes.func.isRequired,
    onTextFieldSelectionCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(CashCoinSelectorWidget);
