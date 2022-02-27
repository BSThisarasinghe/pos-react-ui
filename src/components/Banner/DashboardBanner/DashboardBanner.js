import React from "react";
import PropTypes from "prop-types";

//Material UI
import {CardMedia, Grid, withStyles} from "@material-ui/core";
import bannerImage from "../../../../public/images/sathosa-banner.png";

const styles = () => {
    return ({
        media: {
            height: "69%",
            width: "88px",
            paddingTop: "10px",
        }
    });
};

const DashboardBanner = props => {

    const {classes} = props;

    return (
        <Grid container>
            <Grid item>
                <CardMedia
                    className={classes.media}
                    image={bannerImage}
                />
            </Grid>
            <Grid item>
                <CardMedia
                    className={classes.media}
                    image={bannerImage}
                />
            </Grid>
            <Grid item>
                <CardMedia
                    className={classes.media}
                    image={bannerImage}
                />
            </Grid>
        </Grid>


    );
};

DashboardBanner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardBanner);
