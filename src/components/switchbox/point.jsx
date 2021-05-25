import {React , useState, useEffect} from 'react'
import './point.css'
import MedalGraphBox from '../medal-graphbox/index'
import axios from 'axios'

const Point = () => {
    const [data, setData] = useState('')
    const url = 'http://localhost:5000/'

    const getData = async () => {
        try {
            const response = await axios.get(`${url}match/point`)
            setData(response.data)
        }
        catch (error){
            console.error(`Error: ${error}`)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
    let tourneyName = ['Australian Open', 'Roland Garros', 'US Open', 'Wimbledon']
    let firstInRate = []
    let firstWonRate = []
    let secondWonRate = []
    let breakRate = []
    let serveRate = []
    

    let card1 = []
    let card2 = []
    let card3 = []
    let card4 = []
    let card5 = []
    let card6 = []
    let card7 = []
    let card8 = []

    if(data.length > 0){
        firstInRate = data.map((ele) => ele.firstIn_rate)
        firstWonRate = data.map((ele) => ele.firstWon_rate)
        secondWonRate = data.map((ele) => ele.secondWon_rate)
        breakRate = data.map((ele) => ele.break_rate)
        serveRate = data.map((ele) => ele.serve_rate)

        card1 = [
            ['一發進球率: ', firstInRate[0]], 
            ['一發得分率: ', firstWonRate[0]],
            ['二發得分率: ', secondWonRate[0]],
            ['破發率: ', breakRate[0]],
            ['保發率: ', serveRate[0]]
        ]
        card2 = [
            ['一發進球率: ', firstInRate[1]], 
            ['一發得分率: ', firstWonRate[1]],
            ['二發得分率: ', secondWonRate[1]],
            ['破發率: ', breakRate[1]],
            ['保發率: ', serveRate[1]]
        ]
        card3 = [
            ['一發進球率: ', firstInRate[2]], 
            ['一發得分率: ', firstWonRate[2]],
            ['二發得分率: ', secondWonRate[2]],
            ['破發率: ', breakRate[2]],
            ['保發率: ', serveRate[2]]
        ]
        card4 = [
            ['一發進球率: ', firstInRate[3]], 
            ['一發得分率: ', firstWonRate[3]],
            ['二發得分率: ', secondWonRate[3]],
            ['破發率: ', breakRate[3]],
            ['保發率: ', serveRate[3]]
        ]
        card5 = [
            ['一發進球率: ', firstInRate[4]], 
            ['一發得分率: ', firstWonRate[4]],
            ['二發得分率: ', secondWonRate[4]],
            ['破發率: ', breakRate[4]],
            ['保發率: ', serveRate[4]]
        ]
        card6 = [
            ['一發進球率: ', firstInRate[5]], 
            ['一發得分率: ', firstWonRate[5]],
            ['二發得分率: ', secondWonRate[5]],
            ['破發率: ', breakRate[5]],
            ['保發率: ', serveRate[5]]
        ]
        card7 = [
            ['一發進球率: ', firstInRate[6]], 
            ['一發得分率: ', firstWonRate[6]],
            ['二發得分率: ', secondWonRate[6]],
            ['破發率: ', breakRate[6]],
            ['保發率: ', serveRate[6]]
        ]   
        card8 = [
            ['一發進球率: ', firstInRate[7]], 
            ['一發得分率: ', firstWonRate[7]],
            ['二發得分率: ', secondWonRate[7]],
            ['破發率: ', breakRate[7]],
            ['保發率: ', serveRate[7]]
        ]
    }

    return(
        <div className="point-container">
            <div className="row">
                <MedalGraphBox 
                    imgLink1="image/austalian_open.png"
                    imgLink2="image/gold.png"
                    name={tourneyName[0]}
                    content={card1.map((ele) => <div>{ele}</div>)}
                ></MedalGraphBox>
                <MedalGraphBox
                    imgLink1="image/roland_garros.png"
                    imgLink2="image/gold.png"
                    name={tourneyName[1]}
                    content={card3.map((ele) => <div>{ele}</div>)}
                ></MedalGraphBox>
                <MedalGraphBox 
                    imgLink1="image/us_open.png"
                    imgLink2="image/gold.png"
                    name={tourneyName[2]}
                    content={card5.map((ele) => <div>{ele}</div>)}
                ></MedalGraphBox>
                <MedalGraphBox 
                    imgLink1="image/wimbledon.jpg"
                    imgLink2="image/gold.png"
                    name={tourneyName[3]}
                    content={card7.map((ele) => <div>{ele}</div>)}
                ></MedalGraphBox>
            </div>
            <div className="row">
                <MedalGraphBox 
                    imgLink1="image/austalian_open.png"
                    imgLink2="image/silver.png"
                    name={tourneyName[0]}
                    content={card2.map((ele) => <div>{ele}</div>)}
                ></MedalGraphBox>
                <MedalGraphBox
                    imgLink1="image/roland_garros.png"
                    imgLink2="image/silver.png"
                    name={tourneyName[1]}
                    content={card4.map((ele) => <div>{ele}</div>)}
                ></MedalGraphBox>
                <MedalGraphBox 
                    imgLink1="image/us_open.png"
                    imgLink2="image/silver.png"
                    name={tourneyName[2]}
                    content={card6.map((ele) => <div>{ele}</div>)}
                ></MedalGraphBox>
                <MedalGraphBox 
                    imgLink1="image/wimbledon.jpg"
                    imgLink2="image/silver.png"
                    name={tourneyName[3]}
                    content={card8.map((ele) => <div>{ele}</div>)}
                ></MedalGraphBox>
            </div>
        </div>
    )
}

export default Point;