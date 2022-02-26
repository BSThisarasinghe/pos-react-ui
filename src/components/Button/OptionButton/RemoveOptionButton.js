import React from "react";
import PropTypes from "prop-types";

//Components
import OptionButtonWrapper from "./OptionButtonWarpper/OptionButtonWrapper";

//Material UI
import {CardMedia, Grid, withStyles} from "@material-ui/core";
import BackspaceIcon from '@material-ui/icons/Backspace';

import buttonImage from "../../../../public/images/remove-option.png";

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

const RemoveOptionButton = props =>{

    const {classes, buttonCallback} = props;

    return (
        <OptionButtonWrapper
            label={"Remove"}
            buttonCallback={buttonCallback}
        >
            <BackspaceIcon/>
        </OptionButtonWrapper>
    );
};

RemoveOptionButton.propTypes = {
    classes: PropTypes.object.isRequired,
    buttonCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(RemoveOptionButton);
