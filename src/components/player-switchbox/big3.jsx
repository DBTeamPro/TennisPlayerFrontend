import {React, useState, useEffect} from 'react'
import './big3.css'
import axios from 'axios'

const Big3 = () => {
    const [data, setData] = useState('')
    const url = 'http://localhost:5000/'

    const getData = async () => {
        try {
            const response = await axios.get(`${url}player/big3`)
            setData(response.data)
        }
        catch (error){
            console.error(`Error: ${error}`)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
    let playerAge = []
    let playerCountry = []
    let numOfChampG = []
    let numOfChampM = []
    let numOfChampA = []
    let winLose = []

    if(data.length > 0){
        playerAge = data.map((ele) => ele.age)
        playerCountry = data.map((ele) => ele.country)
        numOfChampG = data.map((ele) => ele.champ_G)
        numOfChampM = data.map((ele) => ele.champ_M)
        numOfChampA = data.map((ele) => ele.champ_A)
        winLose = data.map((ele) => ele.win_lose)
    }

    return(
        <div className="big3-container">
            <div className="wallpaper">
                <img src="image/big3.jpg" width="100%" height="100%" alt="#" />
            </div>
            <div className="score-container">
                <div className="row1">
                    <div className="col1">AGE</div>
                    <div className="col2">{data.length > 0 && playerAge[2]}</div>
                    <div className="col3"></div>
                    <div className="col4">{data.length > 0 && playerAge[1]}</div>
                    <div className="col5"></div>
                    <div className="col6">{data.length > 0 && playerAge[0]}</div>
                </div>
                <div className="row2">
                    <div className="col1">COUNTRY</div>
                    <div className="col2">{data.length > 0 && playerCountry[2]}</div>
                    <div className="col3"></div>
                    <div className="col4">{data.length > 0 && playerCountry[1]}</div>
                    <div className="col5"></div>
                    <div className="col6">{data.length > 0 && playerCountry[0]}</div>
                </div>
                <div className="row3">
                    <div className="col1">CHAMPG</div>
                    <div className="col2">{data.length > 0 && numOfChampG[2]}</div>
                    <div className="col3"></div>
                    <div className="col4">{data.length > 0 && numOfChampG[1]}</div>
                    <div className="col5"></div>
                    <div className="col6">{data.length > 0 && numOfChampG[0]}</div>
                </div>
                <div className="row4">
                    <div className="col1">CHAMPM</div>
                    <div className="col2">{data.length > 0 && numOfChampM[2]}</div>
                    <div className="col3"></div>
                    <div className="col4">{data.length > 0 && numOfChampM[1]}</div>
                    <div className="col5"></div>
                    <div className="col6">{data.length > 0 && numOfChampM[0]}</div>
                </div>
                <div className="row5">
                    <div className="col1">CHAMPA</div>
                    <div className="col2">{data.length > 0 && numOfChampA[2]}</div>
                    <div className="col3"></div>
                    <div className="col4">{data.length > 0 && numOfChampA[1]}</div>
                    <div className="col5"></div>
                    <div className="col6">{data.length > 0 && numOfChampA[0]}</div>
                </div>
                <div className="row6">
                    <div className="col1">WIN-LOSE</div>
                    <div className="col2">{data.length > 0 && winLose[2]}</div>
                    <div className="col3"></div>
                    <div className="col4">{data.length > 0 && winLose[1]}</div>
                    <div className="col5"></div>
                    <div className="col6">{data.length > 0 && winLose[0]}</div>
                </div>
            </div>
        </div>
    )
}

export default Big3;