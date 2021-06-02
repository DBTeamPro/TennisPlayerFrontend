import {React, useState, useEffect} from 'react'
import Navbar from '../../components/navbar'
import './index.css'
import axios from 'axios'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 700,
    },
    container: {
        maxHeight: 600,
    },
});

const columns = [
    {id: "id", label: "Id"},
    {id: "surface", label: "Surface"},
    {id: "winner_name", label: "Winner_name"},
    {id: "winner_hand", label: "Winner_hand"},
    {id: "winner_ht", label: "Winner_ht"},
    {id: "winner_age", label: "Winner_age"},
    {id: "loser_name", label: "Loser_name"},
    {id: "loser_hand", label: "Loser_hand"},
    {id: "loser_ht", label: "Loser_ht"},
    {id: "loser_age", label: "Loser_age"},
    {id: "score", label: "Score"},
    {id: "minutes", label: "Minutes"}
];


const SmallMatch = () => {
    const [rows, setRows] = useState('')
    const url = 'http://localhost:5000/'

    const getSmallMatch = async () => {
        try {
            const response = await axios.get(`${url}crud/small_matches`)
            setRows(response.data)
        }
        catch (error){
            console.error(`Error: ${error}`)
        }
    }

    useEffect(() => {
        getSmallMatch()
    },[rows])

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

    const createSmallMatch = async (inputSmallMatch) => {
        try {
            const response = await axios.post(`${url}crud/create`, inputSmallMatch)
            alert(response.data["message"])
        }
        catch (error){
            console.error(`Error: ${error}`)
        }
    }

    const updateSmallMatch = async (inputNewMatch, id) => {
        try {
            const response = await axios.put(`${url}crud/update/${id}`, inputNewMatch)
            alert(response.data["message"])
        }
        catch (error){
            console.error(`Error: ${error}`)
        }
    }

    const deleteSmallMatch = async (id) => {
        try {
            const response = await axios.delete(`${url}crud/delete/${id}`)
            alert(response.data["message"])
        }
        catch (error){
            console.error(`Error: ${error}`)
        }
    }

    const [smallMatch, setSmallMatch] = useState(
        {
            id: "",
            surface: "",
            winner_name: "",
            winner_hand: "",
            winner_ht : "",
            winner_age: "",
            loser_name: "",
            loser_hand: "",
            loser_ht: "",
            loser_age: "",
            score: "",
            minutes: ""
        }
    )

    const enterValue = e => {
        setSmallMatch({
            ...smallMatch,
            [e.target.name]: e.target.value
        })
    }

    const [updateId, setUpdateId] = useState('')
    const [updateTarget, setUpdateTarget] = useState({})

    const enterUpdate = e => {
        setUpdateTarget({
            ...updateTarget,
            [e.target.name]: e.target.value
        })
    }

    const enterUpdateId = e => {
        setUpdateId(e.target.value)
    }

    const [deleteId, setDeleteId] = useState('')
    const enterDeleteId = e => {
        setDeleteId(e.target.value)
    }

    return (
        <div className="small-match-container">
            <Navbar></Navbar>
            <div className="content">
                <div className="modify-container">
                    <div className="up">
                        <div className="create-container">
                            <form onSubmit={e => {
                                createSmallMatch(smallMatch)
                                getSmallMatch()
                                e.preventDefault()
                            }}>
                                <label className="row">
                                    <div className="title">比賽ID:</div>
                                    <input value={smallMatch.id} name='id' onChange={enterValue} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">地面材質:</div>
                                    <input value={smallMatch.surface} name='surface' onChange={enterValue} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">獲勝者名稱:</div>
                                    <input value={smallMatch.winner_name} name='winner_name' onChange={enterValue} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">獲勝者慣用手:</div>
                                    <input value={smallMatch.winner_hand} name="winner_hand" onChange={enterValue} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">獲勝者身高:</div>
                                    <input value={smallMatch.winner_ht} name="winner_ht" onChange={enterValue} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">獲勝者年齡:</div>
                                    <input value={smallMatch.winner_age} name="winner_age" onChange={enterValue} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">敗者名稱:</div>
                                    <input value={smallMatch.loser_name} name="loser_name" onChange={enterValue} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">敗者慣用手:</div>
                                    <input value={smallMatch.loser_hand} name="loser_hand" onChange={enterValue} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">敗者身高:</div>
                                    <input value={smallMatch.loser_ht} name="loser_ht" onChange={enterValue} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">敗者年齡:</div>
                                    <input value={smallMatch.loser_age} name="loser_age" onChange={enterValue} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">比分:</div>
                                    <input value={smallMatch.score} name="score" onChange={enterValue} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">比賽時間:</div>
                                    <input value={smallMatch.minutes} name="minutes" onChange={enterValue} type="text"/>
                                </label>
                                <input type="submit" value="建立"/>
                            </form>
                        </div>
                        <div className="update-container">
                            <form onSubmit={e => {
                                updateSmallMatch(updateTarget, updateId)
                                getSmallMatch()
                                e.preventDefault()
                            }}>
                                <label className="row">
                                    <div className="title">要更新的比賽ID:</div>
                                    <input value={updateId} onChange={enterUpdateId}  type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">地面材質:</div>
                                    <input value={updateTarget.surface} name='surface' onChange={enterUpdate} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">獲勝者名稱:</div>
                                    <input value={updateTarget.winner_name} name='winner_name' onChange={enterUpdate} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">獲勝者慣用手:</div>
                                    <input value={updateTarget.winner_hand} name="winner_hand" onChange={enterUpdate} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">獲勝者身高:</div>
                                    <input value={updateTarget.winner_ht} name="winner_ht" onChange={enterUpdate} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">獲勝者年齡:</div>
                                    <input value={updateTarget.winner_age} name="winner_age" onChange={enterUpdate} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">敗者名稱:</div>
                                    <input value={updateTarget.loser_name} name="loser_name" onChange={enterUpdate} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">敗者慣用手:</div>
                                    <input value={updateTarget.loser_hand} name="loser_hand" onChange={enterUpdate} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">敗者身高:</div>
                                    <input value={updateTarget.loser_ht} name="loser_ht" onChange={enterUpdate} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">敗者年齡:</div>
                                    <input value={updateTarget.loser_age} name="loser_age" onChange={enterUpdate} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">比分:</div>
                                    <input value={updateTarget.score} name="score" onChange={enterUpdate} type="text"/>
                                </label>
                                <label className="row">
                                    <div className="title">比賽時間:</div>
                                    <input value={updateTarget.minutes} name="minutes" onChange={enterUpdate} type="text"/>
                                </label>
                                <input type="submit" value="更改"/>
                            </form>
                        </div>
                    </div>
                    <div className="delete-container">
                    <form onSubmit={e => {
                        deleteSmallMatch(deleteId)
                        getSmallMatch()
                        e.preventDefault()
                    }}>
                            <label className="row">
                                <div className="title">要刪除的比賽ID:</div>
                                <input value={deleteId} onChange={enterDeleteId} type="text"/>
                            </label>
                            <input type="submit" value="刪除"/>
                        </form>
                    </div>
                </div>
                <div className="show-container">
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

export default SmallMatch;