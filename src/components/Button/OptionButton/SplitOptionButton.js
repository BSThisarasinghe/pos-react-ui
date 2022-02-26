import React from "react";
import PropTypes from "prop-types";

//Components
import OptionButtonWrapper from "./OptionButtonWarpper/OptionButtonWrapper";

//Material UI
import {CardMedia, Grid, withStyles} from "@material-ui/core";
import CallSplitIcon from '@material-ui/icons/CallSplit';

import splitImage from "../../../../public/images/split-option.png";

const styles = () => {
    return ({
        media: {
            height: "20px",
            width: "45px",
            paddingTop: "10px"
        }
    });
};

const SplitOptionButton = props =>{

    const {classes, buttonCallback} = props;

    return (
        <OptionButtonWrapper
            label={"Split"}
            buttonCallback={buttonCallback}
        >
            <CallSplitIcon/>
        </OptionButtonWrapper>
    );
};

SplitOptionButton.propTypes = {
    classes: PropTypes.object.isRequired,
    buttonCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(SplitOptionButton);
