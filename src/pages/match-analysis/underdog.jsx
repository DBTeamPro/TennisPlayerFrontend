import React from 'react'
import Navbar from '../../components/navbar'
import './underdog.css'
import GraphBox from '../../components/graphbox'

const Underdog = () => {
    return (
        <div className="underdog-container">
            <Navbar></Navbar>
            <div className="content">
                <GraphBox></GraphBox>
            </div>
        </div>
    );
}

export default Underdog;