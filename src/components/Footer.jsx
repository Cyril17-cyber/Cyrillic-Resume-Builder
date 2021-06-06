import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import logo from '../images/jackOfHearts.jpg';

function Footer() {
    const year = new Date();
    return (
        <div className="footer">
            <div className="left"><Link to='/' className="logo">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Cyrillic</p>
            </Link>
            <div className="footer__links">
            <a href="https://twitter.com/Cyril_Asogwa_BM">
                <TwitterIcon />
            </a>
            <a href="https://asogwac029@gmail.com">
                <EmailIcon />
            </a>
            <a href="https://www.linkedin.com/in/cyril-asogwa-419a69208/">
                <LinkedInIcon />
            </a>
            <a href="https://github.com/Cyril17-cyber">
                <GitHubIcon />
            </a>
            </div></div>

            <div className="right">
            <Link className="pro">GO Pro</Link>

            <p>Copyright ©{year.getFullYear()}. All Right Reserved</p>
            </div>

        </div>
    );
}

export default Footer;