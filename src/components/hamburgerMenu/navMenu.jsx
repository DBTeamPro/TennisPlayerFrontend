import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import React from 'react'
import "./navMenu.css"

const variants = {
    show: {
        transform: "translateX(0em)",
        opacity: 1,
    },
    hide: {
        transform: "translateX(5em)",
        opacity: 0,
    },
};

const NavMenu = ({ isOpen }) => {
    return (
        <div className="NavMenuContainer">
            <lu className="NavList">
                <motion.li
                    className = "NavLink"
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                        ...variants.show,
                        transition: { delay: 0.3, duration: 0.2 },
                        },
                        hide: {
                        ...variants.hide,
                        transition: { delay: 0.05, duration: 0.05 },
                        },
                    }}
                >
                    <Link to="/">Match Analisis</Link>
                </motion.li>
                <motion.li
                    className = "NavLink"
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                        ...variants.show,
                        transition: { delay: 0.4, duration: 0.2 },
                        },
                        hide: {
                        ...variants.hide,
                        transition: { delay: 0.1, duration: 0.05 },
                        },
                    }}
                >
                    <Link to="/player">Player Analysis</Link>
                </motion.li>
                <motion.li
                    className = "NavLink"
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                        ...variants.show,
                        transition: { delay: 0.5, duration: 0.2 },
                        },
                        hide: {
                        ...variants.hide,
                        transition: { delay: 0.15, duration: 0.05 },
                        },
                    }}
                >
                    <Link to="/insert">Add Matches</Link>
                </motion.li>
                <motion.li
                    className = "NavLink"
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                        ...variants.show,
                        transition: { delay: 0.6, duration: 0.2 },
                        },
                        hide: {
                        ...variants.hide,
                        transition: { delay: 0.2, duration: 0.05 },
                        },
                    }}
                >
                    <Link to="/information">Search Matches</Link>
                </motion.li>
                <motion.li
                    className = "NavLink"
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                        ...variants.show,
                        transition: { delay: 0.7, duration: 0.2 },
                        },
                        hide: {
                        ...variants.hide,
                        transition: { delay: 0.25, duration: 0.05 },
                        },
                    }}
                >
                    <Link to="/update">Update Matches</Link>
                </motion.li>
                <motion.li
                    className = "NavLink"
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                        ...variants.show,
                        transition: { delay: 0.8, duration: 0.2 },
                        },
                        hide: {
                        ...variants.hide,
                        transition: { delay: 0.3, duration: 0.05 },
                        },
                    }}
                >
                    <Link to="/delete">Delete Matches</Link>
                </motion.li>
            </lu>
        </div>
    );
}

export default NavMenu;