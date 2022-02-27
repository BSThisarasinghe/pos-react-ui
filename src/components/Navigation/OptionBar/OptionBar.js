import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

//MUI components
import {withStyles} from '@material-ui/core/styles';

import HoldOptionButton from "../../Button/OptionButton/HoldOptionButton";
import RecallOptionButton from "../../Button/OptionButton/RecallOptionButton";
import SplitOptionButton from "../../Button/OptionButton/SplitOptionButton";
import CloseOptionButton from "../../Button/OptionButton/CloseOptionButton";
import UpOptionButton from "../../Button/OptionButton/UpOptionButton";
import DownOptionButton from "../../Button/OptionButton/DownOptionButton";
import RemoveOptionButton from "../../Button/OptionButton/RemoveOptionButton";
import SearchOptionButton from "../../Button/OptionButton/SearchOptionButton";
import CashOptionButton from "../../Button/OptionButton/CashOptionButton";


const styles = theme => ({
    button: {
        margin: "5px",
        height: "65px",
        width: "90px",
        textTransform: 'none'
    },
    image: {
        height: "30px",
        width: "30px",
        paddingTop: "10px"
    }
});


const OptionBar = props => {

    const {
        classes,
        upOptionButtonCallback,
        downOptionButtonCallback,
        removeOptionButtonCallback,
        splitOptionButtonCallback,
        holdOptionButtonCallback,
        recallOptionButtonCallback
    } = props;

    return (
        <Fragment>
            <HoldOptionButton
                buttonCallback={holdOptionButtonCallback}
            />
            <RecallOptionButton
                buttonCallback={recallOptionButtonCallback}
            />
            <SplitOptionButton
                buttonCallback={splitOptionButtonCallback}
            />
            <CloseOptionButton/>
            <UpOptionButton
                buttonCallback={upOptionButtonCallback}/>
            <DownOptionButton
                buttonCallback={downOptionButtonCallback}/>
            <RemoveOptionButton
                buttonCallback={removeOptionButtonCallback}
            />
            <SearchOptionButton/>
            <CashOptionButton/>
        </Fragment>
    );
};


OptionBar.propTypes = {
    classes: PropTypes.object.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
    upOptionButtonCallback: PropTypes.func.isRequired,
    downOptionButtonCallback: PropTypes.func.isRequired,
    removeOptionButtonCallback: PropTypes.func.isRequired,
    splitOptionButtonCallback: PropTypes.func.isRequired,
    holdOptionButtonCallback: PropTypes.func.isRequired,
    recallOptionButtonCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(OptionBar);
