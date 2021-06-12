import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="about">
            <h1>About Cyrillic</h1>
                    <p><Link to='/' className="homeLink">Cyrillic</Link> is a resume editing website that enables users to edit, download and print previously designed resume templates built completly out HTML, CSS, SCSS and React framework all for free!</p>
            
                    <p>
                        Developed and designed in 2021 by full stack web developer <a href="https://www.linkedin.com/in/cyril-asogwa-419a69208/">Cyril Asogwa</a>, Cyrillic was designed and developed as a project.
                        </p>

                        <p>
                            In the future, if Cyriilic gets a recognition, a pro version will be made availabe. And in the pro version, you could expect things such as the color picker, access to build your resume and cards from scratch, access to card templates and access to all resume templates as displayed, to be unlocked and available for use.
                        </p>

                        <p>
                            After using the web app, It would mean a lot if you could send a review to me via E-mail or any other social media platforms which I have provided links to my profile in the footer. And it would also mean much if you could connect to me on those platforms if you have any web related problems or questions or if you would want to collaborate on a project.
                        </p>
        </div>
    )
}

export default About;