import OptionButtonWrapper from "../../OptionButton/OptionButtonWarpper/OptionButtonWrapper";
import {CardMedia, Grid, ButtonBase, withStyles, Fab} from "@material-ui/core";
import buttonImage from "../../../../../public/images/dropdown-button.png";
import PropTypes from "prop-types";
import React from "react";
import {ArrowDownward} from "@material-ui/icons";

const styles = () => {
    return ({
        fabHolder: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width:"100%",
            height:"77%"
        }
    });
};

const DropDownButton = props =>{

    const {classes} = props;

    return (
        <div className={classes.fabHolder}>
            <Fab color="secondary" aria-label="dropdown">
                <ArrowDownward />
            </Fab>
        </div>
    );
};

DropDownButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DropDownButton);
