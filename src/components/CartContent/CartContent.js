import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from "react-router-dom";

const CartContent = (props) => {
    let total = 0;
    if (Array.isArray(props.itemList) && props.itemList.length > 0) {
        props.itemList.map((item, index) => {
            total = total + (parseFloat(item.price) * parseFloat(item.itemcount))
        })
    }

    return (
        <div className="left-content__wrapper">
            <div className="left-content-top__wrapper">
                <h4 className="customerCode">Customer #121313</h4>
                <button type="submit" className="btn btn-function"><i className="bi bi-view-stacked" />&nbsp;Expanded</button>
            </div>
            <div className="listTable__wrapper">
                <div className="listTable">
                    <table>
                        <thead>
                            <tr>
                                <th className="left-align">Code/Name</th>
                                <th className="left-align">Each</th>
                                <th className="left-align">QTY</th>
                                <th className="right-align">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(props.itemList) && props.itemList.length > 0 && props.itemList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>#{item.item_id} {item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.itemcount}</td>
                                        <td className="right-align">{parseFloat(item.price) * parseFloat(item.itemcount)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="summery-details__wrapper">
                    <div className="left-summery__wrapper">
                        <div className="line-row">
                            <h5>Sub Total</h5>
                            <h5>Rs. 30.00</h5>
                        </div>
                        <div className="line-row">
                            <h5>Total Discounts</h5>
                            <h5>Rs. 0.00</h5>
                        </div>
                        <div className="line-row">
                            <h5>Total Items</h5>
                            <h5>{Array.isArray(props.itemList) ? props.itemList.length : 0}</h5>
                        </div>
                    </div>
                    <div className="right-summery__wrapper">
                        <div className="line-row">
                            <h5>Sub Total</h5>
                            <h5>Rs. 30.00</h5>
                        </div>
                        <div className="line-row line-highliter">
                            <h5>TOTAL</h5>
                            <h5>Rs. {parseFloat(total).toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
                <div className="bottom-functions__wrapper">
                    <button className="btn btn-function darker"><i className="bi bi-clock-history" />&nbsp;Recall<div className="holder-count-indicator">12</div></button>
                    <button className="btn btn-function red"><i className="bi bi-x-lg" />&nbsp;Cancel</button>
                    <button className="btn btn-function yellow"><i className="bi bi-clock" />&nbsp;Hold</button>
                </div>
            </div>
            <div className="bottom-pay-trigger__wrapper">
                <button
                    className="btn btn-lg btn-green"
                    onClick={props.onClickPay}
                >Pay
                </button>
            </div>
        </div>
    );
};

export { CartContent };