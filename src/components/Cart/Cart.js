import React, { Fragment } from 'react';
import { CartContent } from '../CartContent/CartContent';
import { CartHeader } from '../CartHeader/CartHeader';

const Cart = (props) => {
    return (
        <Fragment>
            <CartHeader
                orderId={props.orderId}
            />
            <CartContent 
                itemList={props.itemList}
                batchList={props.batchList}
                itemcount={props.itemcount}
                onClickPay={props.onClickPay}
            />
        </Fragment>
    );
};

export { Cart };