import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from "react-router-dom";

const Footer = (props) => {
    return (
        <nav className="navbar navbar-bottom">
            <div className="navbar-profile__wrapper">
                <div className="navbar-profile">
                    <i className="bi bi-person-circle" />
                    <div className="navbar-profile-details__wrapper">
                        <h5>Cashier</h5>
                        <p>Svasthika</p>
                    </div>
                </div>
            </div>
            <div className="nav-link__wrapper">
                <ul className="navbar-nav">
                    <li className="nav-item"><a href><i className="bi bi-bag-check" />&nbsp;Checkout</a></li>
                    <li className="nav-item"><a href><i className="bi bi-receipt" />&nbsp;All Transactions</a></li>
                    <li className="nav-item"><a href><i className="bi bi-list" />&nbsp;Menu</a></li>
                </ul>
            </div>
            <div className="status-indicator__wrapper">
                <div className="status-indicator red">
                    <div className="indicator" />
                    <h5>&nbsp;Disconnected</h5>
                </div>
            </div>
        </nav>
    );
};

export { Footer };