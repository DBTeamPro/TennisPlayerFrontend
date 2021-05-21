import React, { useEffect, useState } from 'react'
import './index.css'
import FirstPlace from './first_place'
import Seed from './seed'
import Underdog from './underdog'
import RankDiff from './rank_diff'
import Point from './point'
import {motion} from 'framer-motion'

const SwitchBox = (props) => {
    const [position, setPosition] = useState(0)
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        setOpen(isOpen => !isOpen)
    }, [position])

    const slideVariants = {
        trigger: {
            transform: `translateX(${position}%)`
        },
        retrigger: {
            transform: `translateX(${position}%)`
        }
    }

    const slideTransition = {
        duration: 0.5
    }


    return (
        <div className="switch-box-container">
            <div className="innerbar-container">
                <div className="title">
                    <div className="content" onClick={() => setPosition(0)}>{props.t1}</div>
                </div>
                <div className="title">
                    <div className="content" onClick={() => setPosition(-20)}>{props.t2}</div>
                </div>
                <div className="title">
                    <div className="content" onClick={() => setPosition(-40)}>{props.t3}</div>
                </div>
                <div className="title">
                    <div className="content" onClick={() => setPosition(-60)}>{props.t4}</div>
                </div>
                <div className="title">
                    <div className="content" onClick={() => setPosition(-80)}>{props.t5}</div>
                </div>
            </div>
            <div className="slide-blocker">
                <motion.div 
                    className="slide-container"
                    initial={false}
                    animate={isOpen ? "trigger" : "retrigger"}
                    variants={slideVariants}
                    transition={slideTransition}
                >
                    <FirstPlace></FirstPlace>
                    <Seed></Seed>
                    <Point></Point>
                    <Underdog></Underdog>
                    <RankDiff></RankDiff>
                </motion.div>
            </div>
        </div>
    )
}

export default SwitchBox;