import React, {useState, useEffect} from 'react';
import "./css/header.css";
import logo from "../imgs-optimized/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from 'react-router-dom';

function Header (){
    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);
    const [header, setHeader] = useState(false);
    const changebackground = () => {
        if(window.scrollY >= 80){
            setHeader(true);
        }else{
            setHeader(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changebackground);
        return () => {
            window.removeEventListener('scroll', changebackground);
        }
    }, [])
    return (
        <header className={header ? 'header active' : 'header'} >
            <NavLink to="/" className="logo">
                <h1>CFAST</h1>
                <img src={logo} alt="" />
            </NavLink>
            <nav className={click ? "nav" : "nav active"}>
                <NavLink to="/" exact className="inactive" activeClassName="active" onClick={handleClick}>
                    Strona główna
                </NavLink>
                <NavLink to="/Menu" className="inactive" onClick={handleClick}>
                    Nasze menu
                </NavLink>
                <NavLink to="/o-nas" className="inactive" onClick={handleClick}>
                    O nas
                </NavLink>
                <NavLink to="/Restauracje" className="inactive" onClick={handleClick}>
                    Restauracje
                </NavLink>
                <NavLink to="/Kontakt" className="inactive" onClick={handleClick}>
                    Kontakt
                </NavLink>
            </nav>
            <div className="hamburger-menu">
                <FontAwesomeIcon onClick={handleClick} icon={click ? faBars : faTimes} className="hamburger-menu-icon"/>
            </div>
        </header>
    )
};

export default Header
