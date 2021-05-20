import {React, useState, useEffect} from 'react'
import './index.css'
import axios from 'axios'

const GraphBox = () => {
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

    return (
        <div className="graph-box-container">
            {data.length > 0 && data.map((ele) => {
                return <li>{Object.values(ele)[0]}</li>
            })}
        </div>
    );
}

export default GraphBox;