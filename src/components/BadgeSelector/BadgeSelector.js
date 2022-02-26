import React, { Fragment, useRef } from 'react';
import moment from 'moment';
import { NumberKeyboard } from '../NumberKeyboard/NumberKeyboard';

const BadgeSelector = (props) => {

    return (
        <Fragment>
            <div className="badge-selection__wrapper">
                <div className="modal side-modal__wrapper">
                    <div className="modal-content">
                        <div className="modal-top-nav">
                            <div className="modal-top-title__wrapper">
                                <h4 className="modal-title">Modal title</h4>
                            </div>
                            <div className="modal-top-element__wrapper">
                                <button className="btn btn-control"><i className="bi bi-arrow-left" /></button>
                                <button
                                    className="btn btn-primary"
                                    onClick={props.onAddBadge}
                                >Add
                                </button>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="badge-selection__wrapper">
                                <div className="top-titles__wrapper">
                                    <h5>{props.batchList.name}</h5>
                                    <h5>{props.batchList.code}</h5>
                                </div>
                                <div className="badge-pool__wrapper">
                                    {props.batchList !== null && Array.isArray(props.batchList.batches) && props.batchList.batches.map((value, index) => {
                                        return (
                                            <div className={"item-badge " + ((props.selectedBatch !== null && props.selectedBatch === value) ? 'active' : '')} key={index} onClick={() => props.setSelectedBatch(value)}>
                                                {(props.selectedBatch !== null && props.selectedBatch === value) && <span className="active" />}
                                                <div className="item-badge-content">
                                                    <h5>{value.batch_number}</h5>
                                                    <h5>{value.price}</h5>
                                                </div>
                                                <div className="item-badge-content">
                                                    <h5>{moment(value.expiry_date).format('YYYY MMM D')} </h5>  {/* 2022 Aug 10 */}
                                                    <h5 className="discounted">-45%</h5>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="badge-pool-carousel-controller__wrapper">
                                    <div className="carousel-controller-btn__wrapper">
                                        <button className="btn btn-lg btn-control" disabled><i className="bi bi-arrow-left" /></button>
                                        <button className="btn btn-lg btn-control"><i className="bi bi-arrow-right" /></button>
                                    </div>
                                    <div className="carousel-controller-indicator__wrapper">
                                        <h5>1 of 4 pages</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="item-adding-input__wrapper">
                                <div className="input-group mb-3">
                                    <input
                                        className="form-control form-control-md input-align-right"
                                        type="text"
                                        name="input items "
                                        placeholder="Items"
                                        value={(props.itemcount !== '' ? props.itemcount : 1) + " /Items"}
                                    />
                                </div>
                            </div>
                            <NumberKeyboard
                                keyboardType={'discount'}
                                onShowDiscount={props.onShowDiscount}
                                onClickDiscountCalButton={props.onClickDiscountCalButton}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export { BadgeSelector };