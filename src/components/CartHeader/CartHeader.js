import React, { Fragment } from 'react';
import moment from 'moment';

const CartHeader = (props) => {
    return (
        <div className="left-topNav__wrapper">
            <div className="left-topNav">
                <img src={require('../../assets/images/ewis-logo.png').default} alt="brand-logo" />
                <h4>Order #{props.orderId}</h4>
                <div className="date-time__wrapper">
                    <h4>{moment().format('hh:mm A')}</h4>
                   <p>{moment().format('ddd Do MMMM')}</p>  {/* Mon 20th November */}
                </div>
            </div>
        </div>
    );
};

export { CartHeader };