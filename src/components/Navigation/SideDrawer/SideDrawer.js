
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
//MUI components
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Hidden from "@material-ui/core/Hidden";
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { getIcon } from './iconPicker';
import {Typography} from "@material-ui/core";

const drawerWidth = 260;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor:  "#afb0b0"
    },
    firstLevelLink: { textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' },
    nested: {
        paddingLeft: theme.spacing(2),
    },
    typography: {
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: 24,
    },
});


const SideDrawer = props => {

    const [items, setItems] = useState({});

    const handleClick = (item) => {
        setItems({ ...items, ...{ [item]: !items[item] } })
    }

    const getJsonLevel = (obj) => {
        let maxLevel = 1;

        for (let key in obj) {
            if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
                const depth = getJsonLevel(obj[key]) + 1;
                maxLevel = Math.max(depth, maxLevel);
            }
        }
        return maxLevel;
    }

    const { classes, theme, mobileOpen, handleDrawerToggle, listItemArray, container } = props;


    const ItemList = ({ listItemArray }) => {
        return (
            <List>
                {listItemArray.map((item) => (
                    <Fragment>
                        <NavLink to={`${item.path}`} style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' }} >
                            <ListItem button key={item.name} onClick={() => handleClick(item.name)} >
                                <ListItemText primary={<Typography variant="h6" className={classes.typography}>{item.name}</Typography>} />
                                {(item.children) && (items[item.name] ? <ExpandLess /> : <ExpandMore />)}
                            </ListItem>
                        </NavLink>
                        {(item.children) &&
                            < Collapse in={items[item.name]} timeout="auto" unmountOnExit>
                                <List className={classes.nested}><ItemList listItemArray={item.children} /></List>
                            </Collapse>}
                    </Fragment>
                ))}
            </List>
        );
    };

    const drawer = (
        <div className={classes.drawer}>
            <ItemList listItemArray={listItemArray} />
        </div>
    );


    return (
        <Fragment>
            <nav className={classes.drawer}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <div style={{ height: 60}}/>
                        <Divider />
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </Fragment>

    );
}

SideDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withRouter(withStyles(styles, { withTheme: true })(SideDrawer));
