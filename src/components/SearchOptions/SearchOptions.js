import React, { Fragment, useRef } from "react";
import { Skeleton, Space, Divider, Switch, Form, Radio } from "antd";

const SearchOptions = (props) => {
    const searchBox = useRef();

    return (
        <div className="input-group icon-inside left mb-3">
            <i className="bi bi-search" />
            {props.searchFocused ? (
                <input
                    ref={(r) => (searchBox.current = r)}
                    className="form-control form-control-md"
                    type="text"
                    name="search by code/name"
                    placeholder="Item code/ Item barcode/Item name"
                    value={props.searchTerm}
                    onChange={props.setSearchTerm}
                    onFocus={props.onFocusSearch}
                />
            ) : (
                <input
                    ref={props.itemcodeBox}
                    className="form-control form-control-md"
                    type="text"
                    name="search by code/name"
                    placeholder="Item code/ Item barcode/Item name"
                    value={props.itemcode}
                    onChange={props.onChangeItemCode}
                    onChangeCapture={(e) => console.log(e.target)}
                // style={{ backgroundColor: 'red' }}
                />
            )}
            <button
                className="btn btn-lg btn-grey"
                onClick={() => {
                    props.onFocusSearch();
                    searchBox.current.focus();
                }}
            >
                <i className="bi bi-collection" />
            </button>
        </div>
    );
};

export { SearchOptions };
