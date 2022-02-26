import React from "react";
import PropTypes from "prop-types";

//Material UI
import {Button, Grid, Typography, CardMedia, withStyles} from "@material-ui/core";

const styles = theme => {
    return ({
        button: {
            margin: theme.spacing(1),
            width: "9%",
            height: "40px"
        }
    });
};

const OptionButtonWrapper = props => {

    const {classes, label, children, buttonCallback} = props;

    return (
        <Button
            variant="contained"
            className={classes.button}
            style={{fontSize: '10px'}}
            size="large"
            startIcon={children}
            onClick={buttonCallback}
        >
            {label}
        </Button>
    );
};

OptionButtonWrapper.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    buttonCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(OptionButtonWrapper);
