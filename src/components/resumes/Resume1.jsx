import React, { useState } from 'react';
import ResumeArrays from "./ResumeArrays";
import FirstLis from './FirstLis';
import SecondLis from './SecondLis';
import ThirdLis from './ThirdLis';
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PhoneIcon from "@material-ui/icons/PhoneOutlined";
import UrlIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Resume1(props) {
    return (
        ResumeArrays.map((resumes, index) => {
            return (
                <div className={resumes.class}>

            <div className="LeftSide">

                <div className="LeftSide__top">
                    
                    <h1 className="name">
                        {props.Data.Fname} {props.Data.Lname}
                    </h1>
                    <div className="contacts">
                        <a href={props.Data.emailLink}>
                            <EmailIcon />
                            <p>{props.Data.email}</p>
                        </a>
                        <a href={props.Data.linkedInLink}>
                            <LinkedInIcon />
                            <p>{props.Data.linkedIn}</p>
                        </a>
                        <a href="http://">
                            <PhoneIcon />
                            <p>{props.Data.phone}</p>
                        </a>
                        <a href={props.Data.twitterLink}>
                        <TwitterIcon />
                            <p>{props.Data.twitter}</p>
                        </a>
                        <a href={props.Data.urlLink}>
                            <UrlIcon />
                            <p>{props.Data.url}</p>
                        </a>
                        <a href="http://">
                            <GitHubIcon />
                            <p>{props.Data.github}</p>
                        </a>
                    </div>
                </div>

                <div className="LeftSide__bottom">
                    <h2 className="firstHead">
                        {props.Data.firstHead}
                    </h2>
                    <ul>
                        {FirstLis.map((li, index) => {
                            return (
                                <li>{li.li}</li>
                            )
                        })}
                    </ul>

                    <h2>{props.Data.secondHead}</h2>
                    <ul>
                        {SecondLis.map((li, index) => {
                            return (
                                <li>{li.li}</li>
                            )
                        })}
                    </ul>
                </div>

            </div>

            <div className="RightSide">
                <div className="RightSide__top">
                    <h2>Professional Summary</h2>
                    <p>{props.Data.summary}</p>
                </div>
                <div className="RightSide__bottom">
                    <h2>{props.Data.thirdHeader}</h2>

                    <ul>
                        {ThirdLis.map((li, index) => {
                            return (
                                <li>{li.li}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>

        
            )
        })
    )
}

export default Resume1;