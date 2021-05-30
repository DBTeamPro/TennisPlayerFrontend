import React, { useEffect, useState } from 'react'
import './player-switchbox.css'
import Big3 from './big3'
import NumOfMatch from './num-of-match'
import {motion} from 'framer-motion'

const PlayerSwitchBox = (props) => {
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
        <div className="player-switch-box-container">
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
                    <NumOfMatch></NumOfMatch>
                    <Big3></Big3>
                    <Big3></Big3>
                    <Big3></Big3>
                    <Big3></Big3>
                </motion.div>
            </div>
        </div>
    )
}

export default PlayerSwitchBox;