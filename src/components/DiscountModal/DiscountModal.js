import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from "react-router-dom";

const DiscountModal = (props) => {
    return (
        <div className={"modal center-modal__wrapper modal-md " + (props.showDiscountModal ? 'modal-show' : '')}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-top-nav">
                        <div className="modal-top-title__wrapper">
                            <h4 className="modal-title">Discounts</h4>
                        </div>
                        <div className="modal-top-element__wrapper">
                            <button className="btn btn-control"><i className="bi bi-arrow-left" /></button>
                            <button
                                className="btn btn-primary"
                                onClick={props.onApplyDiscount}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="single-selection-links__wrapper">
                            <a href>
                                <div className="selection-link-item active">
                                    <span className="active" />
                                    <h5 className>Staff offer</h5>
                                    <h5 className>-15%</h5>
                                </div>
                            </a>
                            <a href>
                                <div className="selection-link-item">
                                    <h5 className>Staff offer</h5>
                                    <h5 className>-15%</h5>
                                </div>
                            </a>
                            <a href>
                                <div className="selection-link-item">
                                    <h5 className>Staff offer</h5>
                                    <h5 className>-15%</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { DiscountModal };