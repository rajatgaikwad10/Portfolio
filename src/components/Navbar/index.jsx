import React, { useState } from "react";
import { link } from "react-router-dom";
import { FaReact, FaBars } from 'react-icons/fa'
import { navMenus } from "./configure";
import { HiX } from "react-icons/hi";
import './style.scss';



const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => { setClick(!click) }

    return (
        <div>
            <h1>Navbar</h1>
            <nav className="navbar"></nav>
            <div className="navbar_container">
                <link to={'/'} className="navbar_container_logo">
                    <FaReact size={30} />
                </link>

                <ul className={click ? "navbar_container_menu active" : "navbar_container_menu"}>
                    {
                        navMenus.map((item, key) => (
                            <li key={key} className="navbar_container_menu_item">
                                <link
                                    to={item.to}
                                    className="navbar_container_menu_item_link">
                                    {item.lable}
                                </link>
                            </li>
                        ))}
                </ul>
                <div className="nav_icon" onClick={handleClick}>

                    {
                        click ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </div>
        </div>
    );
};


export default Navbar;