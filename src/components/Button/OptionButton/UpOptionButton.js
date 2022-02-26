import React from "react";
import PropTypes from "prop-types";

//Components
import OptionButtonWrapper from "./OptionButtonWarpper/OptionButtonWrapper";

//Material UI
import {CardMedia, Grid, withStyles} from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import buttonImage from "../../../../public/images/up-option.png";

const styles = () => {
    return ({
        media: {
            height: "20px",
            width: "38px",
            paddingTop: "10px",
            marginLeft: "10px"
        }
    });
};

const UpOptionButton = props => {

    const {classes, buttonCallback} = props;

    return (
        <OptionButtonWrapper
            label={"Up"}
            buttonCallback={buttonCallback}
        >
            <KeyboardArrowUpIcon/>
        </OptionButtonWrapper>
    );
};

UpOptionButton.propTypes = {
    classes: PropTypes.object.isRequired,
    buttonCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(UpOptionButton);
