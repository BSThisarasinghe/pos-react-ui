import React from "react";
import PropTypes from "prop-types";

//Components
import OptionButtonWrapper from "./OptionButtonWarpper/OptionButtonWrapper";

//Material UI
import {CardMedia, Grid, withStyles} from "@material-ui/core";
import ViewListIcon from '@material-ui/icons/ViewList';

import buttonImage from "../../../../public/images/recall-option.png";

const styles = () => {
    return ({
        media: {
            height: "20px",
            width: "33px",
            paddingTop: "10px",
            marginLeft: "14px"
        }
    });
};

const RecallOptionButton = props =>{

    const {classes, buttonCallback} = props;

    return (
        <OptionButtonWrapper
            label={"Recall"}
            buttonCallback={buttonCallback}
        >
            <Grid item xs={12}>
               <ViewListIcon/>
            </Grid>
        </OptionButtonWrapper>
    );
};

RecallOptionButton.propTypes = {
    classes: PropTypes.object.isRequired,
    buttonCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(RecallOptionButton);
