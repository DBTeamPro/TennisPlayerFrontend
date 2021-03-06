import {React, useState, useEffect} from 'react'
import './seed.css'
import GraphBox from '../graphbox/index'
import axios from 'axios'

const Seed = () => {
    const [data, setData] = useState('')
    const url = 'http://localhost:5000/'

    const getData = async () => {
        try {
            const response = await axios.get(`${url}match/seed`)
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
    let unseedDefeatSeed = []
    let avgUnseedRank = []
    

    let card1 = []
    let card2 = []
    let card3 = []
    let card4 = []

    if(data.length > 0){
        tourneyName = data.map((ele) => ele.tourney_name)
        unseedDefeatSeed = data.map((ele) => ele.unseed_defeat_seed)
        avgUnseedRank = data.map((ele) => ele.avg_unseed_rank)

        card1 = [
            ['非種子打敗種子的比率:  ', unseedDefeatSeed[0]], 
            ['非種子成員平均排名:  ', avgUnseedRank[0]]
        ]
        card2 = [
            ['非種子打敗種子的比率:  ', unseedDefeatSeed[1]], 
            ['非種子球員平均排名:  ', avgUnseedRank[1]]
        ]
        card3 = [
            ['非種子打敗種子的比率:  ', unseedDefeatSeed[2]], 
            ['非種子球員平均排名:  ', avgUnseedRank[2]]
        ]
        card4 = [
            ['非種子打敗種子的比率:  ', unseedDefeatSeed[3]], 
            ['非種子球員平均排名:  ', avgUnseedRank[3]]
        ]
    }

    return(
        <div className="seed-container">
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

export default Seed;