import React from 'react'
import Navbar from '../../components/navbar'
import './first_place.css'
import GraphBox from '../../components/graphbox'
import InnerBar from '../../components/innnerbar/index'

const FirstPlace = () => {
    const cata = ['FirstPlace', 'Seed', 'Point', 'Underdog', 'RankDifference']

    return (
        <div className="first-place-container">
            <Navbar></Navbar>
            <InnerBar 
                t1={cata[0]}
                t2={cata[1]}
                t3={cata[2]}
                t4={cata[3]}
                t5={cata[4]}
            ></InnerBar>
            <div className="content">
                <GraphBox></GraphBox>
            </div>
        </div>
    );
}

export default FirstPlace;