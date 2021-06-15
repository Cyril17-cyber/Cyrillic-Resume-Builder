import React from 'react';
import { Link } from 'react-router-dom';

function MobileLinks(props) {
    return (
        props.mobileMenu && <div className="mobileLinks" onClick={props.menuFunction}>
        <Link to='/'>Home</Link>
        <Link to='/resume'>Resumes</Link>
        <Link to='#' onClick={props.proAlert}>Cards</Link>
        <Link to='/about'>About</Link>
    </div>
    );
}

export default MobileLinks;