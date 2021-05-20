import React from 'react'
import Navbar from '../../components/navbar'
import './rank_diff.css'
import GraphBox from '../../components/graphbox'

const RankDiff = () => {
    return (
        <div className="rank-diff-container">
            <Navbar></Navbar>
            <div className="content">
                <GraphBox></GraphBox>
            </div>
        </div>
    );
}

export default RankDiff;