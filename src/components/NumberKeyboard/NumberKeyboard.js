import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from "react-router-dom";

const NumberKeyboard = (props) => {
    return (
        <Fragment>
            {props.keyboardType === 'default' ? <div className="num-keyboard__wrapper">
                <div className="keyboard__wrapper keyboard-adding__wrapper keyboard-default__wrapper">
                    <div className="keyboard-item-adding">
                        <button id="btn-plus" className="btn btn-plus btn-key-function green" onClick={() => props.onClickDefaultCalButton('+')}>+</button>
                        <button id="btn-done" className="btn btn-done btn-key-function primary-blue" onClick={() => props.onClickDefaultCalButton('Done')}>DONE</button>
                        <button id="btn-minus" className="btn btn-minus btn-key-function yellow" onClick={() => props.onClickDefaultCalButton('-')}>-</button>
                        <button id="btn-one" className="btn btn-one btn-key-number" onClick={() => props.onClickDefaultCalButton('1')}>1</button>
                        <button id="btn-two" className="btn btn-two btn-key-number" onClick={() => props.onClickDefaultCalButton('2')}>2</button>
                        <button id="btn-three" className=" btn btn-three btn-key-number" onClick={() => props.onClickDefaultCalButton('3')}>3</button>
                        <button id="btn-four" className=" btn btn-four btn-key-number" onClick={() => props.onClickDefaultCalButton('4')}>4</button>
                        <button id="btn-five" className="btn btn-five btn-key-number" onClick={() => props.onClickDefaultCalButton('5')}>5</button>
                        <button id="btn-six" className="btn btn-six btn-key-number" onClick={() => props.onClickDefaultCalButton('6')}>6</button>
                        <button id="btn-seven" className="btn btn-seven btn-key-number" onClick={() => props.onClickDefaultCalButton('7')}>7</button>
                        <button id="btn-eight" className="btn btn-eight btn-key-number" onClick={() => props.onClickDefaultCalButton('8')}>8</button>
                        <button id="btn-nine" className="btn btn-nine btn-key-number" onClick={() => props.onClickDefaultCalButton('9')}>9</button>
                        <button id="btn-zero" className="btn btn-zero btn-key-number" onClick={() => props.onClickDefaultCalButton('0')}>0</button>
                        <button id="btn-doublezero" className="btn btn-doublezero btn-key-number" onClick={() => props.onClickDefaultCalButton('00')}>00</button>
                        <button id="btn-dot" className="btn btn-dot btn-key-number" onClick={() => props.onClickDefaultCalButton('.')}>.</button>
                        <button
                            id="btn-discount"
                            className="btn btn-discount btn-secondary-action with-icon purple"
                        >
                            <div className="btn-icon__wrapper">
                                <i className="bi bi-tags" />
                            </div>
                            Discounts
                        </button>
                        <button id="btn-backspace" className="btn btn-backspace btn-key-function primary-blue" onClick={() => props.onClickDefaultCalButton('bksp')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="currentColor" className="bi bi-backspace" viewBox="0 0 16 16">
                                <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                                <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div> : <div className="keyboard__wrapper keyboard-adding__wrapper">
                <div className="keyboard-item-adding">
                    <button id="btn-plus" className="btn btn-plus btn-key-function green" onClick={() => props.onClickDiscountCalButton('+')}>+</button>
                    <button id="btn-done" className="btn btn-done btn-key-function primary-blue" onClick={() => props.onClickDiscountCalButton('Done')}>DONE</button>
                    <button id="btn-minus" className="btn btn-minus btn-key-function yellow" onClick={() => props.onClickDiscountCalButton('-')}>-</button>
                    <button id="btn-one" className="btn btn-one btn-key-number" onClick={() => props.onClickDiscountCalButton('1')}>1</button>
                    <button id="btn-two" className="btn btn-two btn-key-number" onClick={() => props.onClickDiscountCalButton('2')}>2</button>
                    <button id="btn-three" className=" btn btn-three btn-key-number" onClick={() => props.onClickDiscountCalButton('3')}>3</button>
                    <button id="btn-four" className=" btn btn-four btn-key-number" onClick={() => props.onClickDiscountCalButton('4')}>4</button>
                    <button id="btn-five" className="btn btn-five btn-key-number" onClick={() => props.onClickDiscountCalButton('5')}>5</button>
                    <button id="btn-six" className="btn btn-six btn-key-number" onClick={() => props.onClickDiscountCalButton('6')}>6</button>
                    <button id="btn-seven" className="btn btn-seven btn-key-number" onClick={() => props.onClickDiscountCalButton('7')}>7</button>
                    <button id="btn-eight" className="btn btn-eight btn-key-number" onClick={() => props.onClickDiscountCalButton('8')}>8</button>
                    <button id="btn-nine" className="btn btn-nine btn-key-number" onClick={() => props.onClickDiscountCalButton('9')}>9</button>
                    <button id="btn-zero" className="btn btn-zero btn-key-number" onClick={() => props.onClickDiscountCalButton('0')}>0</button>
                    <button id="btn-doublezero" className="btn btn-doublezero btn-key-number" onClick={() => props.onClickDiscountCalButton('00')}>00</button>
                    <button id="btn-dot" className="btn btn-dot btn-key-number" onClick={() => props.onClickDiscountCalButton('.')}>.</button>
                    <button
                        onClick={props.onShowDiscount}
                        id="btn-discount"
                        className="btn btn-discount btn-secondary-action with-icon purple"
                    >
                        <div className="btn-icon__wrapper">
                            <i className="bi bi-tags" />
                        </div>
                        Discounts
                    </button>
                    <button id="btn-backspace" className="btn btn-backspace btn-key-function primary-blue" onClick={() => props.onClickDiscountCalButton('bksp')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="currentColor" className="bi bi-backspace" viewBox="0 0 16 16">
                            <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                            <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                        </svg>
                    </button>
                </div>
            </div>}
        </Fragment>
    );
};

export { NumberKeyboard };