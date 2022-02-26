import React, {useState} from 'react';
import PropTypes from 'prop-types';

//MUI components
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import CardHeader from '@material-ui/core/CardHeader';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: 380,
        marginTop: 100,
        marginLeft: 110
    },
    header: {
        backgroundColor: "#e0e0e0"
    },
    batchTile: {
        width: 170,
        backgroundColor: "#e0e0e0"
    },
    batchTilePanel: {
        paddingTop: 20,
        height: 270,
        overflowY: "scroll"
    },
    button: {
        margin: theme.spacing(1),
        width: "87%",
        height: "60px",
        backgroundColor: "#EF9A9A"
    },
    itemName: {
        paddingRight: '10px',
        fontWeight: '600',
        fontSize: "17px"
    },
    itemCode: {
        paddingRight: '14px',
        fontWeight: '600',
        fontSize: "17px"
    },
    modal: {
        "&:focus": {
            outline: "none"
        }
    }
});


const ItemModal = props => {

    const {classes, data, batchTileCallback, onCancelCallback} = props;

    return data ? <Modal
        open={data.isOpen}
        className={classes.modal}
    >
        <div className={classes.root}>
            <Card>
                <CardHeader
                    title={"Select Batch"}
                    elevation={3}
                    className={classes.header}
                />
                <CardContent>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6" component="h4" className={classes.itemName}>
                                Item Name:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="h4">
                                {data.name}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6" component="h4" className={classes.itemCode}>
                                Item Code:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="h4">
                               {data.code}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.batchTilePanel}>
                        {
                            data.batches.map(batch => {
                                    return <Grid item xs={6}>
                                        <ButtonBase
                                            onClick={() => batchTileCallback(data.code, data.name, data.isCountable, batch.id, batch.batch_number, batch.price)}
                                        >
                                            <Card className={classes.batchTile}>
                                                <CardContent>
                                                    <Typography className={classes.title} color="textSecondary"
                                                                gutterBottom>
                                                        Batch No: {batch.batch_number}
                                                    </Typography>
                                                    <Typography variant="h6" component="h3">
                                                        Rs.{batch.price.toFixed(2)}
                                                    </Typography>
                                                    <Typography className={classes.pos} color="textSecondary">
                                                        Exp: {batch.expiry_date}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </ButtonBase>
                                    </Grid>
                                }
                            )
                        }
                    </Grid>
                </CardContent>
            </Card>
            <Grid container spacing={3}>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        className={classes.button}
                        style={{fontSize: '15px'}}
                        size="large"
                        onClick={onCancelCallback}
                    >
                        Cancel
                    </Button>
                </Grid>
            </Grid>

        </div>
    </Modal> : null;
};

ItemModal.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    batchTileCallback: PropTypes.func.isRequired,
    onCancelCallback: PropTypes.func.isRequired
};

export default withStyles(styles)(ItemModal);
