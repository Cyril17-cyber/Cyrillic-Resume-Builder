import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <Link to='#'>Cyrillic</Link> is a website designed and developed by rookie developer <a href="https://www.linkedin.com/in/cyril-asogwa-419a69208/">Cyril Asogwa</a> which can be used to edit previously made resume templates using HTML, CSS, Sass, JavaScript and the React DOM.
        </div>
    )
}

export default About;