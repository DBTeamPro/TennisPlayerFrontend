import React from 'react'
import './index.css'

const MedalGraphBox = ({imgLink1, imgLink2, name, content}) => {
    return (
        <div className="medal-graph-box-outer">
            <div className="medal-graph-box-container">
                <div className="image-container">
                    <img src={imgLink1} alt="#" height="100%" width="100%"/>
                </div>
                <div className="content">
                    <div className="name">{name}</div>
                    <div className="list">{content}</div>
                </div>
                <div className="medal">
                    <img src={imgLink2} alt="#" height="100%" width="25%"></img>
                </div>
            </div>
        </div>
    );
}

export default MedalGraphBox;