import React, { Fragment, useEffect, useState, useRef } from 'react';
import { AddOrder } from '../../components/AddOrder/AddOrder';
import { Payment } from '../../components/Payment/Payment';

const Wizard = props => {

    const {
        step,
        orderId,
        searchTerm,
        setSearchTerm,
        searchFocused,
        setSearchFocused,
        layoutName,
        inputName,
        displayBadgeModal,
        setDisplayBadgeModal,
        showDiscountModal,
        itemcode,
        batchList,
        selectedBatch,
        setSelectedBatch,
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
        onSelectCategory,
        onClickPaymentCalButton,
        paymentValue
    } = props;

    if (step === 1) {
        return (
            <AddOrder
                orderId={orderId}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchFocused={searchFocused}
                setSearchFocused={setSearchFocused}
                layoutName={layoutName}
                inputName={inputName}
                displayBadgeModal={displayBadgeModal}
                setDisplayBadgeModal={setDisplayBadgeModal}
                showDiscountModal={showDiscountModal}
                itemcode={itemcode}
                batchList={batchList}
                selectedBatch={selectedBatch}
                setSelectedBatch={setSelectedBatch}
                itemcount={itemcount}
                itemList={itemList}
                onClickPay={onClickPay}
                onChangeItemCode={onChangeItemCode}
                onAddBadge={onAddBadge}
                onClickDiscountCalButton={onClickDiscountCalButton}
                onClickDefaultCalButton={onClickDefaultCalButton}
                onApplyDiscount={onApplyDiscount}
                onShowDiscount={onShowDiscount}
                onKeyPress={onKeyPress}
                onChangeSearch={onChangeSearch}
                onFocusSearch={onFocusSearch}
                onSelectCategory={onSelectCategory}
            />
        );
    } else {
        return (
            <Payment
                onClickPaymentCalButton={onClickPaymentCalButton}
                paymentValue={paymentValue}
            />
        );
    }
};

export { Wizard };