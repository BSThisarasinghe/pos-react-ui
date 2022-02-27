import React, { Fragment, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Wizard } from '../../components/Wizard/Wizard';
import { Route, withRouter, Switch, useHistory } from "react-router-dom";
import moment from 'moment';

const Checkout = props => {
    const [step, setStep] = useState(1);
    const [orderId, setOrderId] = useState(moment().format('DDMMYYYYHHmmss'));
    const [searchTerm, setSearchTerm] = useState('');
    const [searchFocused, setSearchFocused] = useState(false);
    const [layoutName, setLayoutName] = useState("default");
    const [inputName, setInputName] = useState("default");
    const [displayBadgeModal, setDisplayBadgeModal] = useState(false);
    const [showDiscountModal, setShowDiscountModal] = useState(false);
    const [itemcode, setItemCode] = useState('');
    const [batchList, setBatchList] = useState(null);
    const [selectedBatch, setSelectedBatch] = useState(null);
    const [itemcount, setItemCount] = useState('');
    const [itemList, setItemList] = useState([]);
    const [paymentValue, setPaymentValue] = useState('');

    const onFocusSearch = () => {
        // console.log("####");
        setSearchFocused(true);
    }

    const onChangeSearch = (input) => {
        setSearchTerm(input);
    }

    const handleShift = () => {
        const newLayoutName = layoutName === "default" ? "shift" : "default";
        setLayoutName(newLayoutName);
    };

    const onKeyPress = button => {
        console.log("Button pressed", button);
        if (button === "{shift}" || button === "{lock}") handleShift();
    };

    const onShowDiscount = () => {
        setShowDiscountModal(true);
    }

    const onApplyDiscount = () => {
        setShowDiscountModal(false);
    }

    const fetchBatchList = (inputValue) => {
        let batchResponse = {
            "code": "4796015510707",
            "name": "Detox wipe 10Pc",
            "batches": [
                {
                    "price": 199.99,
                    "id": "cec73a7e1b8f4941a0e39f7b4e5242ae",
                    "batch_number": "1",
                    "item_id": "12f379e66bfc4ecbadd389a215f321b7",
                    "expiry_date": "2021-09-08",
                    "created_by": "fox",
                    "created_at": "1639210523996",
                    "updated_at": "1639210523996"
                }, {
                    "price": 600.00,
                    "id": "cec73a7e1b8f4941a0e39f7b4e5242ae",
                    "batch_number": "1",
                    "item_id": "12f379e66bfc4ecbadd389a215f321b7",
                    "expiry_date": "2021-09-08",
                    "created_by": "fox",
                    "created_at": "1639210523996",
                    "updated_at": "1639210523996"
                }, {
                    "price": 1499.99,
                    "id": "cec73a7e1b8f4941a0e39f7b4e5242ae",
                    "batch_number": "1",
                    "item_id": "12f379e66bfc4ecbadd389a215f321b7",
                    "expiry_date": "2021-09-08",
                    "created_by": "fox",
                    "created_at": "1639210523996",
                    "updated_at": "1639210523996"
                }
            ],
            "id": "12f379e66bfc4ecbadd389a215f321b7",
            "is_countable": false,
            "created_by": "fox",
            "created_at": "1639210391520",
            "updated_at": "1639210391520"
        }
        setBatchList(batchResponse);
        setSelectedBatch(batchResponse.batches[0]);
        setDisplayBadgeModal(true);
    }

    
    const onSelectCategory = () => {
        setSearchFocused(false);
        fetchBatchList('adada');
    }

    const onClickDefaultCalButton = (key) => {
        let inputValue = itemcode;
        if (key !== 'Done' && key !== 'bksp') {
            inputValue = inputValue.toString() + key.toString();
            setItemCode(inputValue);

            // console.log("$$$$", itemcodeBox.current);
        } else if (key == 'bksp') {
            // console.log("43543");
            inputValue = inputValue.toString().slice(0, -1);
            setItemCode(inputValue);
        } else {
            if (inputValue !== '') {
                fetchBatchList(inputValue);
            }
        }
    }

    const onClickDiscountCalButton = (key) => {
        let inputValue = itemcount;
        if (key !== '+' && key !== '-' && key !== 'bksp') {
            inputValue = inputValue.toString() + key.toString();
            setItemCount(inputValue);
        } else if (key == 'bksp') {
            inputValue = inputValue.toString().slice(0, -1);
            setItemCount(inputValue);
        } else if (key == '+') {
            inputValue = inputValue !== '' ? parseInt(inputValue) + 1 : 2;
            setItemCount(inputValue);
        } else if (key == '-') {
            inputValue = inputValue !== '' ? parseInt(inputValue) - 1 : 0;
            setItemCount(inputValue);
        } else {
            // if(inputValue !== ''){
            //     fetchBatchList();
            // }
        }
    }

    const onAddBadge = () => {
        let itemArray = itemList;
        let item = selectedBatch;
        item['name'] = batchList.name;
        item['itemcount'] = itemcount !== '' ? itemcount : 1;

        itemArray.push(item);
        setItemList(itemArray);
        setItemCode('');
        setItemCount('');
        setDisplayBadgeModal(false);
    }

    const onChangeItemCode = (e) => {
        console.log("###########", e.target.selectionStart);
        console.log("########### value", e.target.value);
    }

    const onClickPay = () => {
        // console.log("###1");
        setStep(step + 1);
    }

    const onClickPaymentCalButton = (key) => {
        let inputValue = paymentValue;
        if (key !== 'Done' && key !== 'bksp') {
            inputValue = inputValue.toString() + key.toString();
            setPaymentValue(inputValue);
        } else if (key == 'bksp') {
            inputValue = inputValue.toString().slice(0, -1);
            setPaymentValue(inputValue);
        } else {
            // if (inputValue !== '') {
            //     fetchBatchList(inputValue);
            // }
        }
    }

    return (
        <React.Fragment>
            <Wizard
                step={step}
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
                onClickPaymentCalButton={onClickPaymentCalButton}
                paymentValue={paymentValue}
            />
        </React.Fragment>
    );
};

export default Checkout;

