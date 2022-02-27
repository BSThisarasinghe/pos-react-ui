import React, { useState, useRef } from 'react';

const PaymentHeader = props => {

    return (
        <nav className="navbar topNav">
            <div className="nav-top-title__wrapper">
                <h4 className="nav-title">Checkout | Order #123726</h4>
            </div>
            <div className="nav-top-element__wrapper">
                <button className="btn btn-control"><i className="bi bi-arrow-left" /></button>
            </div>
        </nav>
    );
};

export { PaymentHeader };