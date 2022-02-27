import React, {Fragment} from "react";
import PropTypes from "prop-types";

//Material UI
import {TextareaAutosize, withStyles} from "@material-ui/core";

const styles = () => {
    return ({
        lineItemTextArea: {
            width: "97%",
            height: '74px !important'
        }
    });
};

const LineItemTextArea = props => {

    const {
        classes,
        item,
        code,
        unitPrice,
        units,
        total
    } = props;

    return (
        <Fragment>
            {item ?
                <TextareaAutosize
                    rowsMax={5}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    value={`${item}\nItem Code  - ${code}\nUnit Price - Rs. ${unitPrice}\nUnits      - ${units}\nItem Total - Rs. ${total}`}
                    defaultValue={''}
                    className={classes.lineItemTextArea}
                /> :
                <TextareaAutosize
                    rowsMax={5}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue={''}
                    className={classes.lineItemTextArea}
                />}
        </Fragment>
    );
};

LineItemTextArea.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    unitPrice: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
};

export default withStyles(styles)(LineItemTextArea);
