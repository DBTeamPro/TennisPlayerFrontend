import {React , useState, useEffect} from 'react'
import './match-time.css'
import DarkGraphBox from '../dark-graphbox/index'
import axios from 'axios'

const MatchTime = () => {
    const [data, setData] = useState('')
    const url = 'http://localhost:5000/'

    const getData = async () => {
        try {
            const response = await axios.get(`${url}player/match_time`)
            setData(response.data)
        }
        catch (error){
            console.error(`Error: ${error}`)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
    let year = []
    let lessThan2h = []
    let over2h = []
    let avgRank = []

    let y2011 = []
    let y2012 = []
    let y2013 = []
    let y2014 = []
    let y2015 = []

    if(data.length > 0){
        year = data.map((ele) => ele.year)
        lessThan2h = data.map((ele) => ele.less_than_2h)
        over2h = data.map((ele) => ele.over_2h)
        avgRank = data.map((ele) => ele.avg_rank)

        y2011 = [
            ['比賽時間少於兩個小時: ', lessThan2h[0]],
            ['比賽時間超過兩個小時: ', over2h[0]],
            ['平均排名: ',avgRank[0]],
        ]
        y2012 = [
            ['比賽時間少於兩個小時: ', lessThan2h[1]],
            ['比賽時間超過兩個小時: ', over2h[1]],
            ['平均排名: ',avgRank[1]],
        ]
        y2013 = [
            ['比賽時間少於兩個小時: ', lessThan2h[2]],
            ['比賽時間超過兩個小時: ', over2h[2]],
            ['平均排名: ',avgRank[2]],
        ]
        y2014 = [
            ['比賽時間少於兩個小時: ', lessThan2h[3]],
            ['比賽時間超過兩個小時: ', over2h[3]],
            ['平均排名: ',avgRank[3]],
        ]
        y2015 = [
            ['比賽時間少於兩個小時: ', lessThan2h[4]],
            ['比賽時間超過兩個小時: ', over2h[4]],
            ['平均排名: ',avgRank[4]],
        ]
    }

    return(
        <div className="match-time-container">
            <div className="row">
                <DarkGraphBox 
                    imgLink="image/2011.png"
                    name={year[0]}
                    content={y2011.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
                <DarkGraphBox
                    imgLink="image/2012.jpg"
                    name={year[1]}
                    content={y2012.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
                <DarkGraphBox
                    imgLink="image/2013.jpg"
                    name={year[2]}
                    content={y2013.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
            </div>
            <div className="row">
                <DarkGraphBox
                    imgLink="image/2014.jpg"
                    name={year[3]}
                    content={y2014.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
                <DarkGraphBox
                    imgLink="image/2015.jpg"
                    name={year[4]}
                    content={y2015.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
            </div>
        </div>
    )
}

export default MatchTime;