import React from "react";
import PropTypes from "prop-types";

//Components
import OptionButtonWrapper from "./OptionButtonWarpper/OptionButtonWrapper";

//Material UI
import {CardMedia, Grid, withStyles} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import buttonImage from "../../../../public/images/down-option.png";

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

const DownOptionButton = props => {

    const {classes, buttonCallback} = props;

    return (
        <OptionButtonWrapper
            label={"Down"}
            buttonCallback={buttonCallback}
        >
            <KeyboardArrowDownIcon/>
        </OptionButtonWrapper>
    );
};

DownOptionButton.propTypes = {
    classes: PropTypes.object.isRequired,
    buttonCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(DownOptionButton);
