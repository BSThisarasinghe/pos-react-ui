import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from "prop-types";

const columns = [
    {id: 'code', label: 'Code', minWidth: 40},
    {id: 'itemName', label: 'Item', minWidth: 50},
    {id: 'batchNumber', label: 'Batch', minWidth: 40},
    {id: 'unitPrice', label: 'Unit Price', minWidth: 40},
    {id: 'units', label: 'Units', minWidth: 30},
    {id: 'total', label: 'Total', minWidth: 40, format: (value) => value.toFixed(2)},

];

const styles = () => {
    return ({
        root: {
            width: '100%',
        },
        container: {
            maxHeight: 470,
        },
        tableRow: {
            "&$selected, &$selected:hover": {
                backgroundColor: "#81d4fa"
            }
        },
        hover: {},
        selected: {}
    });
};

const BillTable = props => {

    const {classes, selectedRow} = props;
    let {rows} = props;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {

                            return (
                                <TableRow
                                    hover role="checkbox"
                                    tabIndex={-1}
                                    key={row.rowId}
                                    className={classes.tableRow}
                                    classes={{hover: classes.hover, selected: classes.selected}}
                                    selected={selectedRow === row.rowId}
                                >
                                    {columns.map((column) => {
                                        let value = row[column.id];
                                        if (column.id == "unitPrice" || column.id == "total") {
                                            value = value.toFixed(2)
                                        }
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

BillTable.propTypes = {
    classes: PropTypes.object.isRequired,
    rows: PropTypes.object.isRequired,
    selectedRow: PropTypes.number.isRequired,
};

export default withStyles(styles)(BillTable);
