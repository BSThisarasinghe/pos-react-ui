import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import actions from 'Actions';
import { Route, withRouter, Switch } from "react-router-dom";

const CartFooter = (props) => {
    return (
        <div className="item-search__wrapper">
            <div className="input-group icon-inside left mb-3">
                <i className="bi bi-search" />
                <input className="form-control form-control-md" type="number" name="search by code/name" id placeholder="Item code/ Item barcode/Item name" />
                <button className="btn btn-lg btn-grey"><i className="bi bi-collection" /></button>
            </div>
            <div className="badge-skeleton__wrapper">
                <img src={require("../../assets/images/ttemp-skeleton.svg").default} alt="" srcSet />
            </div>

        </div>
    );
};

export { CartFooter };