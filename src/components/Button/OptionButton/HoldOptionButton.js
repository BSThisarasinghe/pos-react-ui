import React from "react";
import PropTypes from "prop-types";
import {Power} from "@material-ui/icons";

//Components
import OptionButtonWrapper from "./OptionButtonWarpper/OptionButtonWrapper";

//Material UI
import {CardMedia, Grid, withStyles} from "@material-ui/core";
import BlockIcon from '@material-ui/icons/Block';

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

const HoldOptionButton = props => {

    const {classes, buttonCallback} = props;

    return (
        <OptionButtonWrapper
            label={"Hold"} className={classes.media}
            buttonCallback={buttonCallback}
        >
            <BlockIcon/>
        </OptionButtonWrapper>
    );
};

HoldOptionButton.propTypes = {
    classes: PropTypes.object.isRequired,
    buttonCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(HoldOptionButton);
