import React from "react";
import Photo1 from '../images/photo1.jpeg';
import Photo2 from '../images/photo3.jpeg';
import Photo3 from '../images/photo2.jpeg';
import Photo4 from '../images/photo4.jpeg';
import Photo5 from '../images/photo5.jpeg';
import Photo6 from '../images/photo6.png';
import Photo7 from '../images/photo7.png';
import Photo8 from '../images/photo8.png';
import { Link } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';

function Resumes(props) {
    const images = [
        {img: Photo1, to: '/resume/edit/resume1'},
        {img: Photo2, to: '/resume/edit/resume2'},
        {img: Photo3, to: '/resume/edit/resume3'},
        {img: Photo4, to: '/resume/edit/resume4'}
    ]

    const proImages = [
        {img: Photo5, to: '#'},
        {img: Photo6, to: '#'},
        {img: Photo7, to: '#'},
        {img: Photo8, to: '#'},
    ]


    return (
        <div>
            <div className="resumes">
            <div className="top">
                <h1>
                Resume Templates
                </h1>

                <p>
                Pick a resume template, fill it out, and format. Create a professional resume in a few clicks. Just choose one of 18+ of resume templates below, add ready-made contents, download and get the job!
                </p>
            </div>

            <div className="filterTab">
                <p className="filterTitle">Resume Templates</p>
            </div>
        </div>

         <div className="colorpicker" onClick={props.proAlert}>
             <div className="lightPurple"></div>
             <div className="DarkBlue"></div>
             <div className="LimeGreen"></div>
             <div className="Orangeish"></div>
             <div className="Blackish"></div>
             <div className="Pinkish"></div>
             <div className="Purpleish"></div>
             <div className="BrightCyan"></div>
         </div>

         <div className="ResumeLists">
             {images.map((link, id) => {
                 return (
                    <div className="links" key={id}>
                    <Link to={link.to}>
                    <img src={link.img} className="App-logo" alt="logo" />
                    </Link>
                    </div>
                 )
             })}
             {proImages.map((link, id) => {
                 return (
                    <div className="prolinks" key={id}>
                    <Link to={link.to} onClick={props.proAlert}>
                        <LockIcon />
                    <img src={link.img} className="App-logo" alt="logo" />
                    </Link>
                    </div>
                 )
             })}
         </div>
        </div>
    )
}

export default Resumes;