import React from "react";
import './index.css';
import logo from './Image/logo.png';

const Header =()=>{
    return(
        <>
        <header className="header">
            <img src={logo} alt="logo"/> 
        <p>Niru Keeps</p></header>
        </>
    );
}
export default Header;