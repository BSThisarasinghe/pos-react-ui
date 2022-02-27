import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card/Card";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import withStyles from '@material-ui/core/es/styles/withStyles';
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import {_} from '../../internal/framework';

import {getTimePortionByUnixTime, getDatePortionByUnixTime} from "../../utils/DateUtils";


const styles = theme => ({
    root: {
        flexGrow: 1,
        width: 430,
        marginTop: 100,
        marginLeft: 100,
        paddingLeft: 8,
        paddingTop: 15,
        paddingRight: 8,
        backgroundColor: "#f5f5f5",

    },
    paper: {
        width: 416,
        height: 430,
        overflow: 'auto',
        padding: '0px !important',
        backgroundColor: "#e0e0e0"
    },
    header: {
        backgroundColor: "#9e9e9e"
    },
    button: {
        margin: theme.spacing(0.5, 0),
        backgroundColor: "#0288d1"
    },
    listElement: {
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
    },
    listElementContent: {
        padding: '0px !important',
        width: 430,
        height: 78
    },
    listElementContentSelected: {
        padding: '0px !important',
        width: 430,
        height: 78
    },
    listElementContainer: {
        backgroundColor: "#e0e0e0",

    },
    cancelButton: {
        margin: theme.spacing(1),
        height: "60px",
        backgroundColor: "#EF9A9A",
        float: 'left',
        width: "80%",
    },
    okButton: {
        margin: theme.spacing(1),
        height: "60px",
        backgroundColor: "#80CBC4",
        float: 'right',
        width: "80%",
    },
    cancelButtonContainer: {
        // align:'left'
    },
    okButtonContainer: {
        // align:'right'
    },
});

const generateShortBillNo = (billId) => {
    return billId.slice(-12)
}

const RecallBillModal = props => {

    const {classes, isOpen, onCancelCallback, itemList, onOkCallback} = props;

    const [selected, setSelected] = React.useState('');

    const handleSelect = value => {
        setSelected(value.id);
    };

    const billList = (bills) => (
        <Card className={classes.paper}>
            <CardHeader
                title={"Recall Bill"}
                elevation={3}
                className={classes.header}
            />
            <CardContent className={classes.listElementContainer}>
                <List dense component="div" role="list">
                    {bills.map(bill => {
                        return (
                            <ListItem
                                key={bill.id}
                                role="listitem"
                                button
                                className={classes.listElement}
                                onClick={() => handleSelect(bill)}
                            >
                                <Card
                                    className={classes.listElementContent}
                                    style={selected === bill.id ? {backgroundColor: "#81d4fa",} : {}}
                                >
                                    <CardContent>
                                        <Grid item container>
                                            <Grid item xs={12}>
                                                <Typography variant="h6" component="h3">
                                                    Bill No: {generateShortBillNo(bill.id)}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container>
                                            <Grid item xs={12}>
                                                <Typography variant="h9" component="h5" color="textSecondary">
                                                    {getDatePortionByUnixTime(bill.created_at)} {getTimePortionByUnixTime(bill.created_at)} 
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </ListItem>
                        );
                    })}
                    <ListItem/>
                </List>
            </CardContent>
        </Card>
    );

    return (<Modal
            open={isOpen}
            className={classes.modal}
        >
            <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>{billList(itemList)}</Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6} className={classes.okButtonContainer}>
                        <Button
                            variant="contained"
                            className={classes.okButton}
                            style={{fontSize: '15px'}}
                            size="large"
                            onClick={() => onOkCallback(_.find(itemList, {id: selected}))}
                        >
                            Ok
                        </Button>
                    </Grid>
                    <Grid item xs={6} className={classes.cancelButtonContainer}>
                        <Button
                            variant="contained"
                            className={classes.cancelButton}
                            style={{fontSize: '15px'}}
                            size="large"
                            onClick={onCancelCallback}
                        >
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Modal>
    );
};

RecallBillModal.propTypes = {
    classes: PropTypes.object.isRequired,
    itemList: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onCancelCallback: PropTypes.func.isRequired,
    onOkCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(RecallBillModal);
