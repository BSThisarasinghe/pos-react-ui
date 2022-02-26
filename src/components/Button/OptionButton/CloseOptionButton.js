import React from "react";
import PropTypes from "prop-types";

//Components
import OptionButtonWrapper from "./OptionButtonWarpper/OptionButtonWrapper";

//Material UI
import {CardMedia, Grid, withStyles} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

import buttonImage from "../../../../public/images/close-option.png";

const styles = () => {
    return ({
        media: {
            height: "20px",
            width: "38px",
            paddingTop: "10px",
            marginLeft:"10px"
        }
    });
};

const CloseOptionButton = props =>{

    const {classes} = props;

    return (
        <OptionButtonWrapper label={"Close"}>
            <CloseIcon/>
        </OptionButtonWrapper>
    );
};

CloseOptionButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CloseOptionButton);
