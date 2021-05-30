import React from 'react'
import './index.css'

const DarkGraphBox = ({imgLink, name, content}) => {
    return (
        <div className="dark-graph-box-outer">
            <div className="graph-box-container">
                <div className="image-container">
                    <img src={imgLink} alt="#" height="100%" width="100%"/>
                </div>
                <div className="content">
                    <div className="name">{name}</div>
                    <div className="list">{content}</div>
                </div>
            </div>
        </div>
    );
}

export default DarkGraphBox;