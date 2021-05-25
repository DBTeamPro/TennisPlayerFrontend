import {React , useState, useEffect} from 'react'
import './underdog.css'
import GraphBox from '../graphbox/index'
import axios from 'axios'

const FirstPlace = () => {
    const [data, setData] = useState('')
    const url = 'http://localhost:5000/'

    const getData = async () => {
        try {
            const response = await axios.get(`${url}match/underdog`)
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
    let rankDiff100 = []
    let avgAge = []
    

    let card1 = []
    let card2 = []
    let card3 = []
    let card4 = []

    if(data.length > 0){
        tourneyName = data.map((ele) => ele.tourney_name)
        rankDiff100 = data.map((ele) => ele.rank_diff_100)
        avgAge = data.map((ele) => ele.avg_age)

        card1 = [
            ['爆冷門的機率:  ', rankDiff100[0]], 
            ['爆冷球員平均排名: ', avgAge[0]]
        ]
        card2 = [
            ['爆冷門的機率:  ', rankDiff100[1]], 
            ['爆冷球員平均排名:  ', avgAge[1]]
        ]
        card3 = [
            ['爆冷門的機率:  ', rankDiff100[2]], 
            ['爆冷球員平均排名:  ', avgAge[2]]
        ]
        card4 = [
            ['爆冷門的機率:  ', rankDiff100[3]], 
            ['爆冷球員平均排名:  ', avgAge[3]]
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