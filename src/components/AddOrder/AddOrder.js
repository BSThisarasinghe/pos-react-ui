import React, { Fragment, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { DiscountModal, Footer, NumberKeyboard, SearchOptions, Cart, SimpleKeyboard, CategoryList, BadgeSelector } from '../../components';
import { Route, withRouter, Switch, useHistory } from "react-router-dom";
import moment from 'moment';

const AddOrder = props => {

    const {
        orderId,
        searchTerm, setSearchTerm,
        searchFocused, setSearchFocused,
        layoutName,
        inputName,
        displayBadgeModal, setDisplayBadgeModal,
        showDiscountModal,
        itemcode,
        batchList,
        selectedBatch, setSelectedBatch,
        itemcount,
        itemList,
        onClickPay,
        onChangeItemCode,
        onAddBadge,
        onClickDiscountCalButton,
        onClickDefaultCalButton,
        onApplyDiscount,
        onShowDiscount,
        onKeyPress,
        onChangeSearch,
        onFocusSearch,
        onSelectCategory
    } = props;

    const keyboard = useRef();
    const itemcodeBox = useRef();

    return (
        <React.Fragment>
            <div className="main-checkout__wrapper">
                <div className="left__wrapper">
                    <Cart
                        orderId={orderId}
                        itemList={itemList}
                        batchList={batchList}
                        itemcount={itemcount}
                        onClickPay={onClickPay}
                    />
                </div>
                <div className="right__wrapper">
                    {!displayBadgeModal ? <div className="item-search__wrapper">
                        <SearchOptions
                            searchFocused={searchFocused}
                            searchTerm={searchTerm}
                            setSearchTerm={(e) => setSearchTerm(e.target.value)}
                            onFocusSearch={onFocusSearch}
                            itemcode={itemcode}
                            onChangeItemCode={onChangeItemCode}
                            itemcodeBox={(r) => (itemcodeBox.current = r)}
                        />
                        <CategoryList
                            searchFocused={searchFocused}
                            onSelectCategory={() => onSelectCategory()}
                        />
                    </div> : <BadgeSelector
                        onAddBadge={() => onAddBadge()}
                        onShowDiscount={onShowDiscount}
                        batchList={batchList}
                        setSelectedBatch={setSelectedBatch}
                        selectedBatch={selectedBatch}
                        onClickDiscountCalButton={onClickDiscountCalButton}
                        itemcount={itemcount}
                    />}
                    {!searchFocused && !displayBadgeModal && <NumberKeyboard
                        keyboardType={"default"}
                        onClickDefaultCalButton={onClickDefaultCalButton}
                    />}
                </div>

            </div>
            {searchFocused && <SimpleKeyboard
                keyboardRef={r => (keyboard.current = r)}
                inputName={inputName}
                layoutName={layoutName}
                onChangeInput={onChangeSearch}
                onKeyPress={onKeyPress}
            />}
            <Footer />
            {showDiscountModal && <DiscountModal
                show={showDiscountModal}
                onApplyDiscount={onApplyDiscount}
            />}
        </React.Fragment>
    );
};

export { AddOrder };