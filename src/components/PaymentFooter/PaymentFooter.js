import React, { useState, useRef } from 'react';

const PaymentFooter = props => {

    return (
        <div className="bottom-btn__wrapper container">
            <button id="btn-discount" className="btn btn-payaction btn-secondary-action with-icon black">
                <div className="btn-icon__wrapper">
                    <i className="bi bi-arrow-90deg-left" />
                </div>
                Back
            </button>
            <button id="btn-discount" className="btn btn-payaction btn-secondary-action with-icon black">
                <div className="btn-icon__wrapper">
                    <i className="bi bi-printer" />
                </div>
                Print
            </button>
            <button id="btn-discount" className="btn btn-payaction btn-secondary-action with-icon black">
                <div className="btn-icon__wrapper">
                    <i className="bi bi-signpost-split" />
                </div>
                Split
            </button>
            <button id="btn-discount" className="btn btn-payaction btn-secondary-action with-icon black">
                <div className="btn-icon__wrapper">
                    <i className="bi bi-cash-coin" />
                </div>
                Cash
            </button>
            <button id="btn-discount" className="btn btn-payaction btn-secondary-action with-icon black">
                <div className="btn-icon__wrapper">
                    <i className="bi bi-credit-card" />
                </div>
                Card
            </button>
            <button id="btn-discount" className="btn btn-payaction btn-secondary-action with-icon black">
                <div className="btn-icon__wrapper">
                    <i className="bi bi-credit-card" />
                </div>
                Cash+Card
            </button>
            <button id="btn-discount" className="btn btn-payaction btn-secondary-action with-icon black">
                <div className="btn-icon__wrapper">
                    <i className="bi bi-three-dots" />
                </div>
                More
            </button>
        </div>
    );
};

export { PaymentFooter };