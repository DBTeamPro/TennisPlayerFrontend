import {React , useState, useEffect} from 'react'
import './rank_diff.css'
import GraphBox from '../graphbox/index'
import axios from 'axios'

const FirstPlace = () => {
    const [data, setData] = useState('')
    const url = 'http://localhost:5000/'

    const getData = async () => {
        try {
            const response = await axios.get(`${url}match/rank`)
            setData(response.data)
        }
        catch (error){
            console.error(`Error: ${error}`)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
    let tourneyName = []
    let rankDiff20 = []
    let lowRankWin20 = []
    let rankDiff2050 = []
    let lowRankWin2050 = []
    let rankDiff50 = []
    let lowRankWin50 = []
    

    let card1 = []
    let card2 = []
    let card3 = []
    let card4 = []

    if(data.length > 0){
        tourneyName = data.map((ele) => ele.tourney_name)
        rankDiff20 = data.map((ele) => ele.rank_diff_20)
        lowRankWin20 = data.map((ele) => ele.low_rank_win_20)
        rankDiff2050 = data.map((ele) => ele.rank_diff_2050)
        lowRankWin2050 = data.map((ele) => ele.low_rank_win_2050)
        rankDiff50 = data.map((ele) => ele.rank_diff_50)
        lowRankWin50 = data.map((ele) => ele.low_rank_win_50)

        card1 = [
            ['20以內平均比賽時間: ', rankDiff20[0]], 
            ['20以內贏球機率: ', lowRankWin20[0]],
            ['20~50以內平均比賽時間: ', rankDiff2050[0]], 
            ['20~50以內贏球機率: ', lowRankWin2050[0]],
            ['50以內平均比賽時間: ', rankDiff50[0]], 
            ['50以內贏球機率: ', lowRankWin50[0]]
        ]
        card2 = [
            ['20以內平均比賽時間: ', rankDiff20[1]], 
            ['20以內贏球機率: ', lowRankWin20[1]],
            ['20~50以內平均比賽時間: ', rankDiff2050[1]], 
            ['20~50以內贏球機率: ', lowRankWin2050[1]],
            ['50以內平均比賽時間: ', rankDiff50[1]], 
            ['50以內贏球機率: ', lowRankWin50[1]]
        ]
        card3 = [
            ['20以內平均比賽時間: ', rankDiff20[2]], 
            ['20以內贏球機率: ', lowRankWin20[2]],
            ['20~50以內平均比賽時間: ', rankDiff2050[2]], 
            ['20~50以內贏球機率: ', lowRankWin2050[2]],
            ['50以內平均比賽時間: ', rankDiff50[2]], 
            ['50以內贏球機率: ', lowRankWin50[2]]
        ]
        card4 = [
            ['20以內平均比賽時間: ', rankDiff20[3]], 
            ['20以內贏球機率: ', lowRankWin20[3]],
            ['20~50以內平均比賽時間: ', rankDiff2050[3]], 
            ['20~50以內贏球機率: ', lowRankWin2050[3]],
            ['50以內平均比賽時間: ', rankDiff50[3]], 
            ['50以內贏球機率: ', lowRankWin50[3]]
        ]
    }

    return(
        <div className="first-place-container">
            <div className="row">
                <GraphBox 
                    imgLink="image/austalian_open.png"
                    name={tourneyName[0]}
                    content={card1.map((ele) => <div>{ele}</div>)}
                ></GraphBox>
                <GraphBox
                    imgLink="image/roland_garros.png"
                    name={tourneyName[1]}
                    content={card2.map((ele) => <div>{ele}</div>)}
                ></GraphBox>
            </div>
            <div className="row">
                <GraphBox
                    imgLink="image/us_open.png"
                    name={tourneyName[2]}
                    content={card3.map((ele) => <div>{ele}</div>)}
                ></GraphBox>
                <GraphBox
                    imgLink="image/wimbledon.jpg"
                    name={tourneyName[3]}
                    content={card4.map((ele) => <div>{ele}</div>)}
                ></GraphBox>
            </div>
        </div>
    )
}

export default FirstPlace;