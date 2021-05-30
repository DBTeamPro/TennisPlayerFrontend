import {React , useState, useEffect} from 'react'
import './num-of-match.css'
import DarkGraphBox from '../dark-graphbox/index'
import axios from 'axios'

const NumOfMatch = () => {
    const [data, setData] = useState('')
    const url = 'http://localhost:5000/'

    const getData = async () => {
        try {
            const response = await axios.get(`${url}player/num_of_matches`)
            setData(response.data)
        }
        catch (error){
            console.error(`Error: ${error}`)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
    let numOfTourney = []
    let lessThan100 = []
    let between100To200 = []
    let between200To300 = []

    let levelA = []
    let levelC = []
    let levelD = []
    let levelF = []
    let levelG = []
    let levelM = []
    let levelArray = ['Level A', 'Level C', 'Level D', 'Level F', 'Level G', 'Level M']

    if(data.length > 0){
        numOfTourney = data.map((ele) => ele.num_of_touney)
        lessThan100 = data.map((ele) => ele.less_than_100)
        between100To200 = data.map((ele) => ele.between_100_to_200)
        between200To300 = data.map((ele) => ele.between_200_to_300)

        levelA = [
            ['平均比賽場數: ', numOfTourney[0]],
            ['排名低於100參加場數: ', lessThan100[0]],
            ['排名位於100~200參加場數: ', between100To200[0]],
            ['排名位於200~300參加場數: ', between200To300[0]],
        ]
        levelC = [
            ['平均比賽場數: ', numOfTourney[1]],
            ['排名低於100參加場數: ', lessThan100[1]],
            ['排名位於100~200參加場數: ', between100To200[1]],
            ['排名位於200~300參加場數: ', between200To300[1]],
        ]
        levelD = [
            ['平均比賽場數: ', numOfTourney[2]],
            ['排名低於100參加場數: ', lessThan100[2]],
            ['排名位於100~200參加場數: ', between100To200[2]],
            ['排名位於200~300參加場數: ', between200To300[2]],
        ]
        levelF = [
            ['平均比賽場數: ', numOfTourney[3]],
            ['排名低於100參加場數: ', lessThan100[3]],
            ['排名位於100~200參加場數: ', between100To200[3]],
            ['排名位於200~300參加場數: ', between200To300[3]],
        ]
        levelG = [
            ['平均比賽場數: ', numOfTourney[4]],
            ['排名低於100參加場數: ', lessThan100[4]],
            ['排名位於100~200參加場數: ', between100To200[4]],
            ['排名位於200~300參加場數: ', between200To300[4]],
        ]
        levelM = [
            ['平均比賽場數: ', numOfTourney[5]],
            ['排名低於100參加場數: ', lessThan100[5]],
            ['排名位於100~200參加場數: ', between100To200[5]],
            ['排名位於200~300參加場數: ', between200To300[5]],
        ]
    }

    return(
        <div className="num-of-match-container">
            <div className="row">
                <DarkGraphBox 
                    imgLink="image/levelA.png"
                    name={levelArray[0]}
                    content={levelA.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
                <DarkGraphBox
                    imgLink="image/levelC.png"
                    name={levelArray[1]}
                    content={levelC.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
                <DarkGraphBox
                    imgLink="image/levelD.png"
                    name={levelArray[2]}
                    content={levelD.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
            </div>
            <div className="row">
                <DarkGraphBox
                    imgLink="image/levelF.png"
                    name={levelArray[3]}
                    content={levelF.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
                <DarkGraphBox
                    imgLink="image/levelG.png"
                    name={levelArray[4]}
                    content={levelG.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
                <DarkGraphBox
                    imgLink="image/levelM.png"
                    name={levelArray[5]}
                    content={levelM.map((ele) => <div>{ele}</div>)}
                ></DarkGraphBox>
            </div>
        </div>
    )
}

export default NumOfMatch;