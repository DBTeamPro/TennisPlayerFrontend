import {React, useState} from 'react'
import Navbar from '../../components/navbar'
import './index.css'
import Select from 'react-select'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 850,
    },
    container: {
        maxHeight: 600,
    },
});
const columns = [
    { id: 'tourney_date', label: 'Tourney Date'},
    { id: 'tourney_name', label: 'Tourney Name'},
    { id: 'tourney_level', label: 'Tourney Level'},
    { id: 'surface', label: 'Surface'},
    { id: 'winner_seed', label: 'Winner Seed'},
    { id: 'winner_name', label: 'Winner Name'},
    { id: 'loser_seed', label: 'Loser_seed'},
    { id: 'loser_name', label: 'Loser Name'},
    { id: 'score', label: 'Score'},
    { id: 'round', label: 'Round'},
    { id: 'minutes', label: 'Minutes'}
];

const SearchService = () => {
    const [rows, setRows] = useState('')
    const url = 'http://localhost:5000/'

    const getData = async (inputYear, inputMonth) => {
        try {
            const response = await axios.get(`${url}crud/search_match?year=${inputYear}&month=${inputMonth}`)
            setRows(response.data)
        }
        catch (error){
            console.error(`Error: ${error}`)
        }
    }

    const monthOptions = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
        { value: '11', label: '11' },
        { value: '12', label: '12' },
    ]

    const yearOptions = [
        {value: '2011', label:'2011'},
        {value: '2012', label:'2012'},
        {value: '2013', label:'2013'},
        {value: '2014', label:'2014'},
        {value: '2015', label:'2015'},
    ]

    const [monthObj, setMonthObj] = useState(1)
    const [yearObj, setYearobj] = useState(2011)

    const chooseMonth = (selectedOption) => {
        setMonthObj(selectedOption)
    }
    const chooseYear = (selectedOption) => {
        setYearobj(selectedOption)
    }

    const handleSubmit = (event) => {
        getData(yearObj.value, monthObj.value)
        event.preventDefault()
    }


    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <div className="search-service-container">
            <Navbar></Navbar>
            <div className="content">
                <div className="selection-container">
                    <form onSubmit={handleSubmit}>
                        <label className="selector">
                            <div className="title">選擇年份:</div>
                            <Select value={yearObj} options={yearOptions} onChange={chooseYear}></Select>
                        </label>
                        <label className="selector">
                            <div className="title">選擇月份:</div>
                            <Select value={monthObj} options={monthOptions} onChange={chooseMonth}></Select>
                        </label>
                        <input type="submit" value="查詢"/>
                    </form>
                </div>
                <div className="data-container">
                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.length > 0 && rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
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
                </div>
            </div>
        </div>
    );
}

export default SearchService;