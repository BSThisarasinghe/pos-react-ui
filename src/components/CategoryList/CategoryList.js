import React, { Fragment, useRef } from 'react';
import { Skeleton, Space, Divider, Switch, Form, Radio } from 'antd';

const CategoryList = (props) => {

    return (
        <Fragment>
            {!props.searchFocused ? <div className="badge-skeleton__wrapper">
                <img src={require("../../assets/images/ttemp-skeleton.svg").default} alt="" srcSet />
                {/* <div className='row'>
                                <div className='col-6'>
                                    <Skeleton.Button active={true} size={"large"} shape={"default"} block={true} />
                                </div>
                                <div className='col-6'>
                                    <Skeleton.Button active={true} size={"large"} shape={"default"} block={true} />
                                </div>
                            </div> */}
            </div> :
                <div class="item-search__lister">
                    <div class="item-search-lister-breadcrump__wrapper">
                        <div class="item-search-lister-breadcrump">
                            <div class="item-breadcrump">All</div>
                            <div class="item-breadcrump">Fruites</div>
                            <div class="item-breadcrump">Apple</div>

                        </div>

                    </div>
                    <div class="listed-items__wrapper">
                        <div class="item-listed">American</div>
                        <div class="item-listed">American </div>
                        <div class="item-listed">American </div>
                        <div class="item-listed">American</div>
                        <div class="item-listed">American</div>
                        <div class="item-listed" onClick={props.onSelectCategory}>america apple <span class="active"></span></div>
                        <div class="item-listed">American</div>
                        <div class="item-listed">American </div>
                        <div class="item-listed">American </div>
                        <div class="item-listed">American</div>
                        <div class="item-listed">American</div>
                        <div class="item-listed">American</div>
                        <div class="item-listed">American </div>
                        <div class="item-listed">American </div>
                        <div class="item-listed">American</div>
                        <div class="item-listed">American American </div>
                    </div>
                </div>}
        </Fragment>
    );
};

export { CategoryList };