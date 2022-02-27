import React, {Fragment} from "react";
import PropTypes from "prop-types";

//Material UI
import {Grid, TextareaAutosize, Typography, withStyles} from "@material-ui/core";

const styles = () =>
    ({
        typographyUserName: {
            fontFamily: '-apple-system',
            fontSize: 10,
            float: "left"
        },
        typographyTime: {
            fontFamily: '-apple-system',
            fontSize: 10,
            float: "left",
            clear: "left"
        },
        typographyLocation: {
            fontFamily: '-apple-system',
            fontSize: 10,
            float: "left",
            clear: "left"
        }
    });

const TillDetailPanel = props => {

    const {classes, username, tillNum, locationName} = props;

    return (
        <id>
            <Typography
                className={classes.typographyUserName}
                variant={"caption"}
            >
                Welcome, {username}
            </Typography>
            <Typography
                className={classes.typographyTime}
                variant={"caption"}
            >
                Sep 10, 2021 4:18.34 PM
            </Typography>
            <Typography
                className={classes.typographyLocation}
                variant={"caption"}
            >
                {tillNum} @ {locationName}
            </Typography>
        </id>
    );
};

TillDetailPanel.propTypes = {
    classes: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    tillNum: PropTypes.string.isRequired,
    locationName: PropTypes.string.isRequired,
};

export default withStyles(styles)(TillDetailPanel);
