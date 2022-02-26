import React from "react";
import PropTypes from "prop-types";

//Material UI
import {Button, CardMedia, withStyles} from "@material-ui/core";
import buttonImage from "../../../../public/images/barcode.png";

const styles = () => {
    return ({
        button: {
            height: "100%",
            width: "100%",
        },
        media: {
            height: "30px",
            width: "89px",
            paddingTop: "10px",
            marginLeft: "10px"
        }

    });
};

const BarCodeKeyButton = props => {

    const {classes, barCodeButtonCallback} = props;

    return (
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            size="large"
            onMouseDown={event => {
                event.preventDefault();
            }}
            onClick={({target}) => barCodeButtonCallback(target.value)}
        >
            <CardMedia
                className={classes.media}
                image={buttonImage}
            />
        </Button>
    );
};

BarCodeKeyButton.propTypes = {
    classes: PropTypes.object.isRequired,
    barCodeButtonCallback: PropTypes.func.isRequired
};

export default withStyles(styles)(BarCodeKeyButton);
