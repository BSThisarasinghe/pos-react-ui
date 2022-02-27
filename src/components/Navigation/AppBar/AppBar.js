import React from 'react';
import PropTypes from 'prop-types';

//MUI components
import {withStyles} from '@material-ui/core/styles';
import {Button, FormControl, Grid, InputLabel, MenuItem, Select} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MainMenu from "../../MainMenu/MainMenu";


const styles = theme => ({
    root: {
        display: 'flex',
    },
    tillDetailPanel: {},
    tillDetailPanelContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "89%"
    },
    menu: {
        marginTop: theme.spacing(2),
        width: "100%"
    },
    input: {
        backgroundColor: "white",
    },
    menuButton: {
        margin: theme.spacing(1),
        width: "100%",
        height: "40px",
        backgroundColor: "#bbdefb"
    },
    menuButtonHolder: {
        paddingRight: "10%"
    }
});


const CustomAppBar = props => {

    const {classes, items, onMenuSelectChange} = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemSelect = (id) => {
        setAnchorEl(null);
        onMenuSelectChange(id);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={1}/>
                <Grid item container xs={2}/>
                <Grid item container xs={3} className={classes.tillDetailPanel}>
                    {/*<Paper className={classes.tillDetailPanelContainer}>*/}
                    {/*    <TillDetailPanel*/}
                    {/*        username={username}*/}
                    {/*        tillNum={tillNum}*/}
                    {/*        locationName={locationName}*/}
                    {/*    />*/}
                    {/*</Paper>*/}
                </Grid>
                <Grid item container xs={3}>
                    {/*<DashboardBanner/>*/}
                </Grid>
                <Grid item container xs={1}/>
                <Grid item xs={2}>
                    <div className={classes.menuButtonHolder}>
                        <Button
                            id="demo-customized-button"
                            aria-controls="demo-customized-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            variant="contained"
                            disableElevation
                            className={classes.menuButton}
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon/>}
                        >
                            Main Menu
                        </Button>
                        <MainMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            {
                                items.map(item => {
                                    return (
                                        <MenuItem onClick={() => handleMenuItemSelect(item.id)} disableRipple>
                                            {item.label}
                                        </MenuItem>);
                                })
                            }
                        </MainMenu>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};


CustomAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    username: PropTypes.string,
    tillNum: PropTypes.string,
    locationName: PropTypes.string,
    managerViewToggle: PropTypes.func.isRequired,
    onMenuSelectChange: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomAppBar);
