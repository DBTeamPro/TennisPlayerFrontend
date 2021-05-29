import {React , useState, useEffect} from 'react'
import './first_place.css'
import GraphBox from '../graphbox/index'
import axios from 'axios'

const FirstPlace = () => {
    const [data, setData] = useState('')
    const url = 'http://localhost:5000/'

    const getData = async () => {
        try {
            const response = await axios.get(`${url}match/firstplace`)
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
    let avgLossPerRound = []
    let avgRank = []
    

    let card1 = []
    let card2 = []
    let card3 = []
    let card4 = []

    if(data.length > 0){
        tourneyName = data.map((ele) => ele.tourney_name)
        avgLossPerRound = data.map((ele) => ele.avg_lose_game_of_champ)
        avgRank = data.map((ele) => ele.avg_rank)

        card1 = [
            ['平均一場輸的局數:  ', avgLossPerRound[0]], 
            ['平均世界排名:  ', avgRank[0]]
        ]
        card2 = [
            ['平均一場輸的局數:  ', avgLossPerRound[1]], 
            ['平均世界排名:  ', avgRank[1]]
        ]
        card3 = [
            ['平均一場輸的局數:  ', avgLossPerRound[2]], 
            ['平均世界排名:  ', avgRank[2]]
        ]
        card4 = [
            ['平均一場輸的局數:  ', avgLossPerRound[3]], 
            ['平均世界排名:  ', avgRank[3]]
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