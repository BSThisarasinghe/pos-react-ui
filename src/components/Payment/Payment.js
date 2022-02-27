import React, { useState, useRef } from 'react';
import { PaymentHeader, NumberKeyboard, PaymentFooter } from '../../components';
import moment from 'moment';

const Payment = props => {

    return (
        <React.Fragment>
            <div className="main-checkout-2__wrapper">
                <PaymentHeader />
                <div className="main-content__wrapper container">
                    <div className="left-side__wrapper">
                        <div className="total-summery__wrapper">
                            <div className="total-summery__container">
                                <div className="item-summery">
                                    <div className="item-summery-left">
                                        <h5>Discounts</h5>
                                    </div>
                                    <div className="item-summery-right two-lines right highlighter">
                                        <h5>50% <span className="regulizer">HSBC credit card offer</span></h5>
                                    </div>
                                </div>
                                <div className="item-summery">
                                    <div className="item-summery-left">
                                        <h5>Other charges</h5>
                                    </div>
                                    <div className="item-summery-right two-lines right">
                                        <h5>Rs.0.00</h5>
                                    </div>
                                </div>
                                <div className="item-summery">
                                    <div className="item-summery-left">
                                        <h5>Sub total</h5>
                                    </div>
                                    <div className="item-summery-right two-lines right">
                                        <h5>Rs.525.00</h5>
                                    </div>
                                </div>
                                <div className="item-summery">
                                    <div className="item-summery-left">
                                        <h5>Tax</h5>
                                    </div>
                                    <div className="item-summery-right two-lines right">
                                        <h5>Rs.0.00</h5>
                                    </div>
                                </div>
                                <div className="item-summery lg-text">
                                    <div className="item-summery-left">
                                        <h5>TOTAL</h5>
                                    </div>
                                    <div className="item-summery-right two-lines right">
                                        <h5>Rs.0.00</h5>
                                    </div>
                                </div>
                                <div className="item-summery lg-text bottom-footer-highlighter">
                                    <div className="item-summery-left">
                                        <h5>Due</h5>
                                    </div>
                                    <div className="item-summery-right two-lines right">
                                        <h5>Rs.525.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-details-input__wrapper">
                            <div className="card-pay-intro__wrapper">
                                <img src="/public/assets/images/card-pay-process.svg" alt="" srcSet />
                                <h5>Swipe, plug, tap the Credit/debit card to your terminal or Enter manually in down</h5>
                            </div>
                            <div className="card-details-content">
                                <div className="input-group form-group text-inside right mb-3">
                                    <label htmlFor="payment-details">Card Number</label>
                                    <input className="form-control form-control-md" type="number" name="payment" id placeholder="0000 0000 0000 0000" />
                                    <div className="placed-item-input__wrapper">
                                        <img src="/public/assets/images/card-types/visa.svg" alt="" srcSet />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-side__wrapper">
                        <div className="top-input__wrapper">
                            <div className="item-top-input">
                                <div className="input-group form-group text-inside right mb-3">
                                    <label htmlFor="payment-details">Payments</label>
                                    <input
                                        className="form-control form-control-md"
                                        type="number"
                                        name="payment"
                                        placeholder={0.00}
                                        value={props.paymentValue}
                                    />
                                    <div className="placed-item-input__wrapper">
                                        Rs.
                                    </div>
                                </div>
                            </div>
                            <div className="item-top-input">
                                <div className="input-group form-group text-inside right mb-3">
                                    <label htmlFor="payment-details">Change</label>
                                    <input className="form-control form-control-md" type="number" name="payment" placeholder={0.00} />
                                    <div className="placed-item-input__wrapper">
                                        Rs.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <NumberKeyboard
                            keyboardType={"default"}
                            screen={'payment'}
                            onClickDefaultCalButton={props.onClickPaymentCalButton}
                        />
                    </div>
                </div>
                <PaymentFooter />
            </div>
        </React.Fragment>
    );
};

export { Payment };