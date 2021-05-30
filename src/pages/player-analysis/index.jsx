import React from 'react'
import Navbar from '../../components/navbar'
import PlayerSwitchBox from '../../components/player-switchbox/player_switchbox'
import './index.css'

const PlayerAnalysis = () => {
    const cata = ['比賽數量', '比賽時間', '持拍慣用手', '球員身高', '三巨頭']

    return (
        <div className="player-analysis-container">
            <Navbar></Navbar>
            <div className="content">
                <PlayerSwitchBox 
                    t1={cata[0]}
                    t2={cata[1]}
                    t3={cata[2]}
                    t4={cata[3]}
                    t5={cata[4]}
                ></PlayerSwitchBox>
            </div>
        </div>
    );
}

export default PlayerAnalysis;