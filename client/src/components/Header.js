import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import "./css/vivify.min.css";
import {ReactComponent as Heart} from "./heart.svg";
import HeaderNav from './HeaderNav';
import Context from './Context';

export default function Header() {

    const { mobile, setMobile, active, setActive } = useContext(Context);

    const toggleMobile = () => {
        !mobile ? setMobile(true) : setMobile(false)
    }

    return (
        <div className="Header-wrapper vivify swoopInTop">
            <div className="Header-nav-mobile">
                <div onClick={toggleMobile} className="pointer HeaderNav-button">menu</div>
                {mobile && <HeaderNav />}
            </div>

            <ul className="Header-nav">
                <li><Link to="/" onClick={e => setActive(1)} className="Header-item vivify fadeIn delay-500">home</Link><br />
                <Heart className={active === 1 ? "heart1" : "heart0"} /></li>
                <li><Link to="/about" onClick={e => setActive(2)} className="Header-item vivify fadeIn delay-500">about</Link><br />
                <Heart className={active === 2 ? "heart1" : "heart0"} /></li>
                <li><Link to="/portfolio" onClick={e => setActive(3)} className="Header-item vivify fadeIn delay-500">portfolio</Link><br />
                <Heart className={active === 3 ? "heart1" : "heart0"} /></li>
                <li><Link to="/contact" onClick={e => setActive(4)} className="Header-item vivify fadeIn delay-500">contact</Link><br />
                <Heart className={active === 4 ? "heart1" : "heart0"} /></li>
                <li><Link to="/blog" onClick={e => setActive(5)} className="Header-item vivify fadeIn delay-500">blog</Link><br />
                <Heart className={active === 5 ? "heart1" : "heart0"} /></li>
            </ul>
        </div>
    )
};