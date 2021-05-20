import React from 'react'
import Navbar from '../../components/navbar'
import './seed.css'
import GraphBox from '../../components/graphbox'

const Seed = () => {
    return (
        <div className="seed-container">
            <Navbar></Navbar>
            <div className="content">
                <GraphBox></GraphBox>
            </div>
        </div>
    );
}

export default Seed;