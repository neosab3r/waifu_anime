import React from 'react';
import classes from './Navbar.module.css';
import {useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    
    return (
        <div className={classes.navbar}>
            <a className={location.pathname.startsWith("/random") ? classes.active : ""} href='/random/'>Random Image</a>
            <a className={location.pathname === "/search/" ? classes.active : ""}  href='/search/'>Search</a>
        </div>
    );
};

export default Navbar;