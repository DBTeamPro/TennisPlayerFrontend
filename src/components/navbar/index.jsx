import React from 'react'
import "./index.css"
import HamburgerMenu from "../hamburgerMenu/index"

const Navbar = (props) => {
    return (
        <div className="NavbarContainer">
            <HamburgerMenu></HamburgerMenu>
        </div>
    );
}

export default Navbar;