import {React, useState, useEffect, useRef} from 'react'
import Navbar from '../../components/navbar'
import './index.css'
import {motion} from 'framer-motion'

const About = () => {
    const [isOpen, setOpen] = useState(false)
    const pointRef = useRef()
    const [pointLength, setPointLength] = useState(0)

    useEffect(() => {
        setOpen(true)
        setPointLength(pointRef.current.getTotalLength())
    }, [])

    const pointVariant = {
        open: {
            strokeDashoffset: 0,
        },
        closed:{
        }
    }

    const pointTransition = {
        duration: 1.2,
        delay: 2,
        repeat: Infinity
    }

    const Variants = {
        open: {
            transform: "translateX(0%)"
        },
        closed: {
            transform: "translateX(-50%)"
        }
    }

    const Transition1 = {
        duration: 0.7,
        delay:0.5
    }
    const Transition2 = {
        duration: 0.7,
        delay: 1
    }
    
    
    return (
        <div className="about-container">
            <Navbar></Navbar>
            <div className="content">
                <div className="blocker"></div>
                <div className="image-container">
                    <img width="100%" height="100%" src="image/landing-back.gif" alt="tennis"/>
                </div>
                <motion.div 
                    className="title1"
                    initial={false}
                    transition={Transition1}
                    animate={isOpen ? "open" : "closed"}
                    variants={Variants}
                >Tennis</motion.div>
                <motion.div 
                    className="title2"
                    initial={false}
                    transition={Transition2}
                    animate={isOpen ? "open" : "closed"}
                    variants={Variants}
                >Expert</motion.div>
                <div className="point">
                    <svg width="100%" height="100%" viewBox="0 0 200 137" fill="none" >
                        <motion.path 
                            ref={pointRef}
                            d="M2.44434 134.148C9.12102 135.451 15.4856 132.412 21.7742 131.014C25.7607 130.128 30.4243 129.074 34.1326 127.317C36.0027 126.431 39.0768 125.5 41.104 125.275C43.2681 125.035 45.1417 123.352 47.16 122.775C50.8992 121.707 54.4495 118.263 58.5326 117.635C62.2603 117.061 66.5482 113.634 69.6235 111.825C70.5341 111.29 73.7329 109.466 74.0246 108.445C74.5992 106.434 77.6641 105.565 78.637 103.727C80.2801 100.623 83.41 98.3046 85.1507 95.1713C87.3703 91.176 91.1276 87.2676 94.0234 83.7283C99.5012 77.0333 104.046 69.5998 106.347 61.5465C108.705 53.2926 94.9655 51.7584 89.904 51.7584C82.1259 51.7584 77.8624 58.2478 77.8624 65.3843C77.8624 74.4932 84.8095 79.2953 92.5799 81.6862C131.924 93.792 164.551 53.3993 181.483 22.9221C183.5 19.292 185.662 16.0329 187.645 12.4649C188.672 10.615 189.507 8.6977 190.532 6.76105C191.113 5.66414 193.137 3.83315 193.137 2.64157C193.137 2.3335 184.689 4.95655 183.842 5.63436C182.791 6.47555 173.843 9.55163 173.843 10.0707C173.843 12.0609 183.174 13.862 184.652 14.6831C187.362 16.1889 191.805 16.7268 194.757 17.5703C195.343 17.7378 198.444 21.4432 197.609 18.5209C197.15 16.9134 196.484 14.9192 196.377 13.0987C196.175 9.66713 193.841 6.50083 193.841 2.95846" 
                            stroke="white" 
                            strokeWidth="3"
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            strokeDashoffset={pointLength}
                            animate={isOpen ? "open" : "closed"}
                            variants={pointVariant}
                            transition={pointTransition}
                            strokeDasharray={pointLength}
                        />
                    </svg>
                </div>
                <div className="click">
                    <svg width="142" height="54" viewBox="0 0 142 54" fill="none">
                        <path d="M25.0964 34.888C25.0964 30.508 24.2681 28.2607 19.7094 27.2476C16.502 26.5349 14.2382 26.4048 11.1535 27.7757C6.74416 29.7355 4.93259 33.8332 3.05542 38.0568C0.71551 43.3216 2.96944 46.8467 6.85801 49.9575C9.03328 51.6977 20.0263 50.4613 20.0263 47.5633" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M46.0106 2.56598C44.8379 7.77813 43.9304 13.0363 42.8066 18.0932C41.9183 22.0905 39.9116 26.3954 39.673 30.4517C39.4707 33.8898 36.2253 37.6069 35.2718 40.944C34.2405 44.5537 29.5327 48.2509 29.5327 51.9997" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M55.5171 33.6205C54.1458 37.1345 53.1968 41.9264 50.5878 44.5353C49.5486 45.5746 46.0106 52.0442 46.0106 49.4646" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M56.1509 24.7478C56.7846 25.5928 57.4184 26.4378 58.0522 27.2828" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M80.8677 33.6205C79.2303 31.3689 77.5456 28.911 74.2484 29.8531C73.2286 30.1444 70.6916 30.8396 69.9529 31.5783C67.7948 33.7364 65.0236 36.1848 65.0236 39.3244C65.0236 43.6416 64.9421 45.8622 68.0516 48.9717C70.5559 51.4759 75.8695 48.1971 78.3327 48.1971" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M104.317 3.19974C104.317 6.36924 105.814 16.0632 103.824 18.5509C103.201 19.3304 102.758 23.3898 102.451 24.4661C101.895 26.4114 101.911 28.389 100.655 29.9587C98.404 32.7729 97.9086 36.9227 95.3035 39.8173C94.314 40.9168 89.1593 48.936 88.4729 47.5633" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M113.19 30.4517C110.451 32.4438 105.796 35.7579 102.416 36.1555C101.938 36.2117 98.0498 37.4451 98.0498 37.7752C98.0498 38.482 100.432 40.1575 101.007 40.7327C102.784 42.5092 105.569 43.3927 107.345 45.1691C109.315 47.1392 111.449 48.2773 113.824 49.4646" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M138.54 8.90363C139.609 14.3827 139.174 20.1261 139.174 25.6984C139.174 29.8571 136.639 33.8902 136.639 38.0568" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M132.203 50.0984C133.262 50.8685 134.237 51.4323 135.372 51.9997" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default About;