import React from 'react'
import Navbar from '../../components/navbar'
import './point.css'
import GraphBox from '../../components/graphbox'

const Point = () => {
    return (
        <div className="point-container">
            <Navbar></Navbar>
            <div className="content">
                <GraphBox></GraphBox>
            </div>
        </div>
    );
}

export default Point;