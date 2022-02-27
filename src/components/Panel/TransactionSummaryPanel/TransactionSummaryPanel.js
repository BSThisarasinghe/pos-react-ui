import React from "react";
import PropTypes from "prop-types";

//Material UI
import {Grid, TextareaAutosize, Typography, withStyles} from "@material-ui/core";

const styles = () =>
    ({
        root: {},
        typography: {
            fontFamily: '-apple-system',
            fontSize: 20
        },
        summaryTextArea: {
            fontSize: 20,
            fontWeight: '600',
            paddingLeft: '2px',
        }

    });

const TransactionSummaryPanel = props => {

    const {classes, itemCount} = props;
    let {total} = props;

    return (
        <Grid container className={classes.root}>
            <Grid container item xs={6} sm={6}>
                <Grid item xs={2} sm={2}>
                    <Typography
                        className={classes.typography}
                        variant={"caption"}
                    >
                        ITEMS:
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Typography
                        className={classes.summaryTextArea}
                        variant={"caption"}
                    >
                        {itemCount? itemCount : 0}
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={2} />
                <Grid item xs={2} sm={2}>
                    <Typography
                        className={classes.typography}
                        variant={"caption"}
                    >
                        TOTAL:
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Typography
                        className={classes.summaryTextArea}
                        variant={"caption"}
                    >
                        {isNaN(total) ? total : total.toFixed(2)}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

TransactionSummaryPanel.propTypes = {
    classes: PropTypes.object.isRequired,
    itemCount: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};

export default withStyles(styles)(TransactionSummaryPanel);
