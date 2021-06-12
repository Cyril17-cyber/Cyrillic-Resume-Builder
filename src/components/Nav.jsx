import React from "react";
import logo from '../images/jackOfHearts.jpg';
import { Link } from "react-router-dom";

function Nav(props) {

    return (
    <nav>
        <Link to='/' className="logo">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Cyrillic</p>
        </Link>

        <div className="nav__links">
            <Link to='/' onClick={props.makeFalse}>Home</Link>
            <Link to='/resume' onClick={props.makeFalse}>Resumes</Link>
            <Link to='#' onClick={props.proAlert}>Cards</Link>
            <Link to='/about' onClick={props.makeTrue}>About</Link>
        </div>

        <button className="pro" onClick={props.proAlert}>Go Pro</button>

        <div id="hamburger" onClick={props.menuFunction}>
            <span></span>
            <span></span>
            <span></span>
          </div>
    </nav>
    )
}

export default Nav;