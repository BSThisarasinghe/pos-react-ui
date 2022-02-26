import React, {useRef} from "react";
import PropTypes, {any} from "prop-types";

//Material UI
import {Avatar, Button, ButtonBase, Grid, Icon, Typography, withStyles} from "@material-ui/core";
import {CASH_KEYPAD_PREFIX, PAYMENT_KEYPAD_PREFIX} from "../../../utils/constants";

const styles = () => {
    return ({
        button: {
            height: "100%",
            width: "100%",
        },
        typography: {
            fontFamily: '-apple-system',
            fontSize: 15,
        },
        imageContainer: {
            textAlign: "-webkit-center"
        },
        avatar:{
            height: "100%",
            width: "100%",
        }
    });
};

const CashPadButton = props => {

    const {classes, label, image, imageVariant} = props;

    return (
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onMouseDown={event=>{
                event.preventDefault();
            }}
            onClick={() => {
                document.dispatchEvent(new KeyboardEvent('cashPad', {
                    'key': `${CASH_KEYPAD_PREFIX}-${label}`
                }));
            }}
        >
            <Grid container>
                <Grid item xs={12} className={classes.imageContainer}>
                    {
                        imageVariant ?
                            <Avatar variant={imageVariant} src={image} className={classes.avatar}/> :
                            <Avatar src={image}/>
                    }
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        className={classes.typography}
                        variant={"caption"}
                    >
                        {label}
                    </Typography>
                </Grid>
            </Grid>

        </Button>
    );
};

CashPadButton.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    imageVariant: PropTypes.string,
};

export default withStyles(styles)(CashPadButton);
