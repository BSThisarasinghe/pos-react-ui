import React from 'react';
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import withStyles from '@material-ui/core/es/styles/withStyles';
import {Grid, Paper, Typography} from "@material-ui/core";


const styles = theme => ({
    paper: {
        overflow: 'auto',
        padding: '0px !important',
    },
    locationName: {
        textAlign: "center",
        fontFamily: "Calibre",
        fontSize: "20px",
        fontWeight: "bold"
    },
    locationCode: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: "15px",
        fontWeight: "bold"
    },
    summaryLeft: {
        textAlign: "left",
        fontFamily: "Roboto",
        fontSize: "10px",
        paddingLeft: 18,
        fontWeight: "bold"
    },
    addressLine: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: "10px",
        fontWeight: "bold"
    },
    phone: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: "10px",
        fontWeight: "bold",
        paddingBottom: 12
    },
    summaryRight: {
        textAlign: "right",
        fontFamily: "Roboto",
        fontSize: "10px",
        fontWeight: "bold"
    },
    generalInfoLeft: {
        textAlign: "left",
        fontFamily: "Roboto",
        fontSize: "10px",
        paddingLeft: 18
    },
    generalInfoRight: {
        textAlign: "left",
        fontFamily: "Roboto",
        fontSize: "10px",
    },
    lineItemHeader: {
        textAlign: "left",
        fontFamily: "Roboto",
        fontSize: "10px",
        paddingLeft: 18,
        fontWeight: "bold"
    },
    lineItemRowRightJustified: {
        textAlign: "right",
        fontFamily: "Roboto",
        fontSize: "10px",
        paddingLeft: 18
    },
    lineItemRowLeftJustified: {
        textAlign: "left",
        fontFamily: "Roboto",
        fontSize: "10px",
        paddingLeft: 18
    },
    lineItemSection: {
        paddingTop: 18
    },
    generalInfoSection: {
        paddingTop: 18
    },
    separator: {
        paddingLeft: 18,
        fontSize: "10px"
    },
    summarySection: {
        paddingTop: 18
    },
    addressSection: {
        paddingTop: 18
    }
});

const getDatePortionByUnixTime = (unixTime) => {
    const date = new Date(unixTime)
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

const getTimePortionByUnixTime = (unixTime) => {
    const date = new Date(unixTime)
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

const generateShortBillNo = (billId) => {
    return billId.slice(-12)
}

const generateUserId = (userId) => {
    return userId.slice(-12)
}

const BillPreview = props => {

    const {classes, bill} = props;

    return (bill ?
            <div>
                <Paper className={classes.paper}>
                    <div className={classes.locationName}>
                        {bill.location.name}
                    </div>
                    <div className={classes.locationCode}>
                        {bill.location.branchCode}
                    </div>
                    <Grid container>
                        <Grid container item className={classes.generalInfoSection}>
                            <Grid item xs={3} className={classes.generalInfoLeft}>
                                {"Bill No"}
                            </Grid>
                            <Grid item xs={3} className={classes.generalInfoRight}>
                                {`: ${generateShortBillNo(bill.bill_no)}`}
                            </Grid>
                            <Grid item xs={3} className={classes.generalInfoLeft}>
                                {"Till"}
                            </Grid>
                            <Grid item xs={3} className={classes.generalInfoRight}>
                                {`: ${bill.till_name}`}
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={3} className={classes.generalInfoLeft}>
                                {"Date"}
                            </Grid>
                            <Grid item xs={3} className={classes.generalInfoRight}>
                                {`: ${getDatePortionByUnixTime(bill.created_at)}`}
                            </Grid>
                            <Grid item xs={3} className={classes.generalInfoLeft}>
                                {"Time"}
                            </Grid>
                            <Grid item xs={3} className={classes.generalInfoRight}>
                                {`: ${getTimePortionByUnixTime(bill.created_at)}`}
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={3} className={classes.generalInfoLeft}>
                                {"Cashier"}
                            </Grid>
                            <Grid item xs={9} className={classes.generalInfoRight}>
                                {`: ${bill.issued_by.first_name}`}
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={3} className={classes.generalInfoLeft}>
                                {"Cashier Id"}
                            </Grid>
                            <Grid item xs={9} className={classes.generalInfoRight}>
                                {`: ${generateUserId(bill.issued_by.id)}`}
                            </Grid>
                        </Grid>
                        <Grid container item className={classes.lineItemSection}>
                            <Grid item xs={6} className={classes.lineItemHeader}>
                                {"Item"}
                            </Grid>
                            <Grid item xs={2} className={classes.lineItemHeader}>
                                {"Price"}
                            </Grid>
                            <Grid item xs={1} className={classes.lineItemHeader}>
                                {"Qty"}
                            </Grid>
                            <Grid item xs={2} className={classes.lineItemHeader}>
                                {"Amount"}
                            </Grid>
                        </Grid>
                        <Grid container className={classes.separator}>
                            {"----------------------------------------------------------------------------------"}
                        </Grid>
                        {
                            bill.items.map(item => {
                                return <Grid container item>
                                    <Grid item xs={6} className={classes.lineItemRowLeftJustified}>
                                        {item.name}
                                    </Grid>
                                    <Grid item xs={2} className={classes.lineItemRowLeftJustified}>
                                        {parseFloat(item.unit_price).toFixed(2)}
                                    </Grid>
                                    <Grid item xs={1} className={classes.lineItemRowLeftJustified}>
                                        {`x${item.quantity}`}
                                    </Grid>
                                    <Grid item xs={2} className={classes.lineItemRowRightJustified}>
                                        {parseFloat(item.amount).toFixed(2)}
                                    </Grid>
                                </Grid>
                            })
                        }
                        <Grid container className={classes.separator}>
                            {"----------------------------------------------------------------------------------"}
                        </Grid>
                        <Grid container item className={classes.summarySection}>
                            <Grid item xs={3} className={classes.summaryLeft}>
                                {"Total"}
                            </Grid>
                            <Grid item xs={1} className={classes.summaryLeft}>
                                {":"}
                            </Grid>
                            <Grid item xs={7} className={classes.summaryRight}>
                                {parseFloat(bill.totals.gross_total).toFixed(2)}
                            </Grid>
                        </Grid>
                        {
                            bill.payments.map(payment => {
                                return <Grid container item className={classes.summarySection}>
                                    <Grid item xs={3} className={classes.summaryLeft}>
                                        {payment.method}
                                    </Grid>
                                    <Grid item xs={1} className={classes.summaryLeft}>
                                        {":"}
                                    </Grid>
                                    <Grid item xs={7} className={classes.summaryRight}>
                                        {parseFloat(payment.amount).toFixed(2)}
                                    </Grid>
                                </Grid>
                            })
                        }
                        <Grid container item className={classes.summarySection}>
                            <Grid item xs={3} className={classes.summaryLeft}>
                                {"Balance"}
                            </Grid>
                            <Grid item xs={1} className={classes.summaryLeft}>
                                {":"}
                            </Grid>
                            <Grid item xs={7} className={classes.summaryRight}>
                                {parseFloat(bill.totals.balance).toFixed(2)}
                            </Grid>
                        </Grid>
                        <Grid container className={classes.separator}>
                            {"----------------------------------------------------------------------------------"}
                        </Grid>
                        <Grid className={classes.addressSection}/>
                        <Grid container item className={classes.addressLine}>
                            <Grid className={classes.addressLine} xs={12}>
                                {bill.location.address.address_line_1}
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid className={classes.addressLine} xs={12}>
                                {bill.location.address.address_line_2}
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid className={classes.addressLine} xs={12}>
                                {bill.location.address.city}
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid className={classes.phone} xs={12}>
                                {bill.location.phone}
                            </Grid>
                        </Grid>
                    </Grid>

                </Paper>

            </div> : null
    );
};

BillPreview.propTypes = {
    classes: PropTypes.object.isRequired,
    bill: PropTypes.object.isRequired
};

export default withStyles(styles)(BillPreview);