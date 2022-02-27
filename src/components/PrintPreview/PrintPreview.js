import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

//MUI components
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import CardHeader from '@material-ui/core/CardHeader';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import BillPreview from "../../components/BillPreview/BillPreview";

const styles = theme => ({
    root: {
        width: 350,
        marginTop: 60,
        marginLeft: 350,
    },
    cardContent: {
        backgroundColor: "#eeeeee",
    },
    header: {
        backgroundColor: "#e0e0e0"
    },
    footer: {
        backgroundColor: "#e0e0e0"
    },
    error: {
        color: 'red',
        width: 194,
        marginTop: 10,
        padding: 2,
        textAlign: "center"
    },
    modal: {
        "&:focus": {
            outline: "none"
        }
    },
    cancelButton: {
        margin: theme.spacing(1.5),
        height: "50px",
        backgroundColor: "#EF9A9A",
        float: 'right',
        width: "100%"
    },
    okButton: {
        margin: theme.spacing(1.5),
        height: "50px",
        backgroundColor: "#80CBC4",
        float: 'left',
        width: "100%"
    }
});


const PrintPreview = props => {

    const { classes, data, onCancelCallback, onOkCallback } = props;

    return data ? <Modal
        open={data.isOpen}
        className={classes.modal}
    >
        <div className={classes.root}>
            <Card>
                <CardHeader
                    title={"Payment Success - Print Preview"}
                    elevation={3}
                    className={classes.header}
                />
                <CardContent className={classes.cardContent}>
                    <BillPreview bill={data.printResponse}/>
                </CardContent>
            </Card>
            {data.error ?
                <Grid container className={classes.footer}>
                    <Grid item xs={3} />
                    <Grid item container xs={9}>
                        <Grid item xs={10}>
                            <Typography
                                className={classes.error}
                                variant="h6" component="h4">
                                Error in printing receipt !
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={9} />
                </Grid> : null}
            <Grid container className={classes.header}>
                <Grid item xs={3} />
                <Grid item container xs={9}>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            className={classes.cancelButton}
                            style={{ fontSize: '15px' }}
                            size="large"
                            onClick={onCancelCallback}
                        >
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            className={classes.okButton}
                            style={{ fontSize: '15px' }}
                            size="large"
                            onClick={onOkCallback}
                        >
                            Print
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={4} />
            </Grid>

        </div>
    </Modal> : null;
};

PrintPreview.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    onCancelCallback: PropTypes.func.isRequired,
    onOkCallback: PropTypes.func.isRequired
};

export default withStyles(styles)(PrintPreview);
