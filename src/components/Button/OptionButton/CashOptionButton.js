import React from "react";
import PropTypes from "prop-types";

//Components
import OptionButtonWrapper from "./OptionButtonWarpper/OptionButtonWrapper";

//Material UI
import {CardMedia, Grid, withStyles} from "@material-ui/core";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import buttonImage from "../../../../public/images/cash-option.png";

const styles = () => {
    return ({
        media: {
            height: "20px",
            width: "55px",
            paddingTop: "10px",
        }
    });
};

const CashOptionButton = props => {

    const {classes} = props;

    return (
        <OptionButtonWrapper label={"Cash"}>
            <Grid item xs={12}>
                <MonetizationOnIcon/>
            </Grid>
        </OptionButtonWrapper>
    );
};

CashOptionButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CashOptionButton);
