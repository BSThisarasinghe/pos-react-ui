import React, {useRef} from "react";
import PropTypes, {any} from "prop-types";

//Material UI
import {Button, Typography, withStyles} from "@material-ui/core";
import {CASH_COIN_SELECTOR_KEYPAD_PREFIX} from "../../../utils/constants";

const styles = () => {
    return ({
        button: {
            height: "100%",
            width: "100%",
        },
        typography: {
            fontFamily: '-apple-system',
            fontSize: 20,
        }
    });
};

const CashCoinKeyPadButton = props => {

    const {classes, label, children} = props;

    return (
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            size="large"
            onMouseDown={event=>{
                event.preventDefault();
            }}
            onClick={() => {
                document.dispatchEvent(new KeyboardEvent('cashCoinKeyPad', {
                    'key': `${CASH_COIN_SELECTOR_KEYPAD_PREFIX}-${label}`
                }));
            }}
        >
            <Typography
                className={classes.typography}
                variant={"caption"}
            >
                {label}
            </Typography>
        </Button>
    );
};

CashCoinKeyPadButton.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
};

export default withStyles(styles)(CashCoinKeyPadButton);
