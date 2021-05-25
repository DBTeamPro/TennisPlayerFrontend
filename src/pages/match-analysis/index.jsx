import React from 'react'
import Navbar from '../../components/navbar'
import './index.css'
import SwitchBox from '../../components/switchbox/index'

const MatchAnalysis = () => {
    const cata = ['FirstPlace', 'Seed', 'Point', 'Underdog', 'RankDifference']

    return (
        <div className="match-analysis-container">
            <Navbar></Navbar>
            <SwitchBox 
                t1={cata[0]}
                t2={cata[1]}
                t3={cata[2]}
                t4={cata[3]}
                t5={cata[4]}
            ></SwitchBox>
        </div>
    );
}

export default MatchAnalysis;