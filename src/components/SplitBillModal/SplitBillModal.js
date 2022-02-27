import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card/Card";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import withStyles from '@material-ui/core/es/styles/withStyles';
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import {_} from '../../internal/framework';


const styles = theme => ({
    root: {
        flexGrow: 1,
        width: 880,
        marginTop: 100,
        marginLeft: 100,
        paddingLeft: 15,
        backgroundColor: "#f5f5f5",

    },
    paper: {
        width: 384,
        height: 430,
        overflow: 'auto',
        padding: '0px !important',
        backgroundColor: "#e0e0e0"
    },
    header: {
        backgroundColor: "#9e9e9e"
    },
    button: {
        margin: theme.spacing(0.5, 0),
        backgroundColor: "#90CAF9"
    },
    listElement: {
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
    },
    listElementContent: {
        padding: '0px !important',
        width: 384,
        height: 78
    },
    listElementContentSelected: {
        padding: '0px !important',
        width: 384,
        height: 78
    },
    listElementContainer: {
        backgroundColor: "#e0e0e0",

    },
    cancelButton: {
        margin: theme.spacing(1),
        height: "60px",
        backgroundColor: "#EF9A9A",
        float: 'left',
        width: "50%",
    },
    okButton: {
        margin: theme.spacing(1),
        height: "60px",
        backgroundColor: "#80CBC4",
        float: 'right',
        width: "50%",
    },
    cancelButtonContainer: {
        // align:'left'
    },
    okButtonContainer: {
        // align:'right'
    },
});

const not = (a, b) => a.filter(value => b.indexOf(value) === -1);

const intersection = (a, b) => a.filter(value => b.indexOf(value) !== -1);

const SplitBillModal = props => {

    const {classes, isOpen, onCancelCallback, onOkCallback} = props;

    const [left, setLeft] = React.useState([]);

    useEffect(() => {
        setLeft(props.itemList);
    }, [props]);

    const [right, setRight] = React.useState([]);

    const [selected, setSelected] = React.useState([]);

    const leftSelected = intersection(selected, left);
    const rightSelected = intersection(selected, right);

    const handleSelect = value => {
        const currentIndex = selected.indexOf(value);
        const newChecked = [...selected];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setSelected(newChecked);
    };

    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftSelected));
        setLeft(not(left, leftSelected));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightSelected));
        setRight(not(right, rightSelected));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };

    const onOkHandler = () => {
        onOkCallback(rightSelected)
    }

    const customList = (title, items) => (
        <Card className={classes.paper}>
            <CardHeader
                title={title}
                elevation={3}
                className={classes.header}
            />
            <CardContent className={classes.listElementContainer}>
                <List dense component="div" role="list">
                    {items.map(item => {
                        return (
                            <ListItem
                                key={item.rowId}
                                role="listitem"
                                button
                                className={classes.listElement}
                                onClick={() => handleSelect(item)}
                            >
                                <Card
                                    className={classes.listElementContent}
                                    style={_.find(selected, {rowId: item.rowId}) ? {backgroundColor: "#81d4fa",} : {}}
                                >
                                    <CardContent>
                                        <Grid item container>
                                            <Grid item xs={8}>
                                                <Typography variant="h6" component="h5">
                                                    {item.code}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" component="h3">
                                                    {item.itemName}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container>
                                            <Grid item xs={4}>
                                                <Typography variant="h9" component="h5" color="textSecondary">
                                                    {item.batchNumber}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="h9" component="h5" color="textSecondary">
                                                    X{item.units}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="h9" component="h5" color="textSecondary">
                                                    Rs.{item.total}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </ListItem>
                        );
                    })}
                    <ListItem/>
                </List>
            </CardContent>
        </Card>
    );

    return (<Modal
            open={isOpen}
            className={classes.modal}
        >
            <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>{customList('Original', left)}</Grid>
                    <Grid item>
                        <Grid container direction="column" alignItems="center">
                            <Button
                                variant="outlined"
                                size="small"
                                className={classes.button}
                                onClick={handleAllRight}
                                disabled={left.length === 0}
                                aria-label="move all right"
                            >
                                ≫
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                className={classes.button}
                                onClick={handleCheckedRight}
                                disabled={leftSelected.length === 0}
                                aria-label="move selected right"
                            >
                                &gt;
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                className={classes.button}
                                onClick={handleCheckedLeft}
                                disabled={rightSelected.length === 0}
                                aria-label="move selected left"
                            >
                                &lt;
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                className={classes.button}
                                onClick={handleAllLeft}
                                disabled={right.length === 0}
                                aria-label="move all left"
                            >
                                ≪
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item>{customList('New(Split)', right)}</Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6} className={classes.okButtonContainer}>
                        <Button
                            variant="contained"
                            className={classes.okButton}
                            style={{fontSize: '15px'}}
                            size="large"
                            onClick={onOkHandler}
                        >
                            Ok
                        </Button>
                    </Grid>
                    <Grid item xs={6} className={classes.cancelButtonContainer}>
                        <Button
                            variant="contained"
                            className={classes.cancelButton}
                            style={{fontSize: '15px'}}
                            size="large"
                            onClick={onCancelCallback}
                        >
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Modal>
    );
};

SplitBillModal.propTypes = {
    classes: PropTypes.object.isRequired,
    itemList: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onCancelCallback: PropTypes.func.isRequired,
    onOkCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(SplitBillModal);
