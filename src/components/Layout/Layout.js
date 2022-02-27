
import React from 'react';
import PropTypes from "prop-types";

// import classes from './Layout.css';

const Layout = props => {
    const { children } = props;

    return (
        <React.Fragment>
            <main>
                {children}
            </main>
        </React.Fragment>
    );
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
};

export default Layout;
