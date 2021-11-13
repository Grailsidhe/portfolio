import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import "./css/Header.css";
import "./css/vivify.min.css";
import Context from './Context';

export default function HeaderNav() {
    
    const { mobile, setMobile, active, setActive } = useContext(Context);
    const handleClick = (i)=> {
        setMobile(false)
        setActive(i)
    };

    return (
        <div className="HeaderNav-wrapper">
            <ul className="Header-nav-mobile">
                <li className="Header-item">
                    <Link to="/" onClick={()=> handleClick(1)} className={active === 1 && "Header-noclick"}>home</Link>
                </li>
                <li className="Header-item">
                    <Link to="/about" onClick={()=> handleClick(2)} className={active === 2 && "Header-noclick"}>about</Link>
                </li>
                <li className="Header-item">
                    <Link to="/portfolio" onClick={()=> handleClick(3)} className={active === 3 && "Header-noclick"}>portfolio</Link>
                </li>
                <links className="Header-item">
                    <Link to="/contact" onClick={()=> handleClick(4)} className={active === 4 && "Header-noclick"}>contact</Link>
                </links>
                <li className="Header-item">
                    <Link to="/blog" onClick={()=> handleClick(5)} className={active === 5 && "Header-noclick"}>blog</Link>
                </li>
            </ul>
        </div>
    )
};