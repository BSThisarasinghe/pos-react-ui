import OptionButtonWrapper from "../../OptionButton/OptionButtonWarpper/OptionButtonWrapper";
import {CardMedia, Grid,ButtonBase,IconButton,Fab, withStyles} from "@material-ui/core";
import {Power} from "@material-ui/icons";
import buttonImage from "../../../../../public/images/power-button.png";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
    fabHolder: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width:"100%",
        height:"77%"
    }
});

const PowerButton = props =>{

    const {classes} = props;

    return (
        <div className={classes.fabHolder}>
            <Fab color="secondary" aria-label="add">
                <Power />
            </Fab>
        </div>
    );
};

PowerButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PowerButton);
