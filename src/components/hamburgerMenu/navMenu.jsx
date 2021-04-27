import { motion } from 'framer-motion';
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
                    <a href="#">Player Analisis</a>
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
                    <a href="#">Add Matches</a>
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
                    <a href="#">Search For Matches</a>
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
                    <a href="#">Update Matches</a>
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
                    <a href="#">Delete Matches</a>
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
                    <a href="#">Activity</a>
                </motion.li>
            </lu>
        </div>
    );
}

export default NavMenu;