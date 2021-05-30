import {React , useState, useEffect} from 'react'
import './hand.css'
import DarkGraphBox from '../dark-graphbox/index'
import axios from 'axios'

const NumOfMatch = () => {
    const [data, setData] = useState('')
    const url = 'http://localhost:5000/'

    const getData = async () => {
        try {
            const response = await axios.get(`${url}player/hand`)
            setData(response.data)
        }
        catch (error){
            console.error(`Error: ${error}`)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
    let rateOfLeftHand = []
    let winRate = []
    let avgRank = []

    let levelA = []
    let levelG = []
    let levelM = []
    let levelArray = ['Level A', 'Level G', 'Level M']

    if(data.length > 0){
        rateOfLeftHand = data.map((ele) => ele.rate_of_left_hand)
        winRate = data.map((ele) => ele.win_rate)
        avgRank = data.map((ele) => ele.avg_rank)

        levelA = [
            ['左撇子比率: ', rateOfLeftHand[0]],
            ['勝率: ', winRate[0]],
            ['平均排名: ', avgRank[0]],
        ]
        levelG = [
            ['左撇子比率: ', rateOfLeftHand[1]],
            ['勝率: ', winRate[1]],
            ['平均排名: ', avgRank[1]],
        ]
        levelM = [
            ['左撇子比率: ', rateOfLeftHand[2]],
            ['勝率: ', winRate[2]],
            ['平均排名: ', avgRank[2]],
        ]
    }

    return(
        <div className="hand-container">
            <div className="row">
                <DarkGraphBox 
                    imgLink="image/levelA.png"
                    name={levelArray[0]}
                    content={levelA.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
                <DarkGraphBox
                    imgLink="image/levelG.png"
                    name={levelArray[1]}
                    content={levelG.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
                <DarkGraphBox
                    imgLink="image/levelM.png"
                    name={levelArray[2]}
                    content={levelM.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
            </div>
        </div>
    )
}

export default NumOfMatch;