import React from 'react'
import { Link } from "react-router-dom";
import './index.css'

const InnerBar = (props) => {
    return (
        <div className="innerbar-container">
            <div className="title">
                <Link to="/match/first-place">{props.t1}</Link>
            </div>
            <div className="title">
                <Link to="/match/seed">{props.t2}</Link>
            </div>
            <div className="title">
                <Link to="/match/point">{props.t3}</Link>
            </div>
            <div className="title">
                <Link to="/match/underdog">{props.t4}</Link>
            </div>
            <div className="title">
                <Link to="/match/rank-diff">{props.t5}</Link>
            </div>
        </div>
    )
}

export default InnerBar;