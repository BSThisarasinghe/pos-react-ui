import React from "react";
import PropTypes from "prop-types";

//Components
import OptionButtonWrapper from "./OptionButtonWarpper/OptionButtonWrapper";

//Material UI
import {CardMedia, Grid, withStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import buttonImage from "../../../../public/images/search-option.png";

const styles = () => {
    return ({
        media: {
            height: "20px",
            width: "32px",
            paddingTop: "10px",
            marginLeft:"10px"
        }
    });
};

const SearchOptionButton = props =>{

    const {classes} = props;

    return (
        <OptionButtonWrapper label={"Search"}>
            <SearchIcon/>
        </OptionButtonWrapper>
    );
};

SearchOptionButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchOptionButton);
