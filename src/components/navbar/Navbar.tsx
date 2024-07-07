import './style.scss';
import React from "react";
import { FaGithub,FaHashtag } from "react-icons/fa";
export const Navbar = () => {

    return(
        // <div>Navbar</div>
        <div className="navbar">
            <FaHashtag className="navbar-icons"/>
            <FaGithub className="navbar-icons"/>
        </div>
    )
}