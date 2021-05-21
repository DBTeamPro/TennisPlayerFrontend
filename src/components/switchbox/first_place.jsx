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
            ['Average loss per round:  ', avgLossPerRound[0]], 
            ['Average Rank:  ', avgRank[0]]
        ]
        card2 = [
            ['Average loss per round:  ', avgLossPerRound[1]], 
            ['Average Rank:  ', avgRank[1]]
        ]
        card3 = [
            ['Average loss per round:  ', avgLossPerRound[2]], 
            ['Average Rank:  ', avgRank[2]]
        ]
        card4 = [
            ['Average loss per round:  ', avgLossPerRound[3]], 
            ['Average Rank:  ', avgRank[3]]
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