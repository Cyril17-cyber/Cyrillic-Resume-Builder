import React from 'react';
import { Link } from 'react-router-dom';

function MobileLinks(props) {
    return (
        props.mobileMenu && <div className="mobileLinks">
        <Link to='/' onClick={props.menuFunction}>Home</Link>
        <Link to='/resume' onClick={props.menuFunction}>Resumes</Link>
        <Link to='/card' onClick={props.menuFunction}>Cards</Link>
        <Link to='/about' onClick={props.menuFunction}>About</Link>
    </div>
    );
}

export default MobileLinks;