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
                <Link to='/'>Home</Link>
                <Link to='/resume'>Resumes</Link>
                <Link to='/card'>Cards</Link>
                <Link to='javas'>About</Link>
            </div>

            <button className="pro">Go Pro</button>

            <div id="hamburger" onClick={props.menuFunction}>
                <span></span>
                <span></span>
                <span></span>
              </div>
        </nav>
    )
}

export default Nav;