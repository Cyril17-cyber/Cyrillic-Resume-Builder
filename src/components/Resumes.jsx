import React, { useState } from "react";
import Photo1 from '../images/photo1.jpeg';
import Photo2 from '../images/photo3.jpeg';
import Texts from "./subComponents/Texts";
import textArrays from "./Arrays";
import { Link } from 'react-router-dom';


function Resumes() {

    const [freeIsChecked, setFreeIsChecked] = useState(false);
    const [proIsChecked, setProIsChecked] = useState(false);

    function setFreeCheckBox() {
        setFreeIsChecked((prevValue) => {
            return !prevValue
        });
    }

    function setProCheckBox() {
        setProIsChecked((prevValue) => {
            return !prevValue
        });
    }

    return (
        <div>
            <Texts
         h1={textArrays[0].h1}
         descr={textArrays[0].description}
         checkFree={freeIsChecked}
         checkPro={proIsChecked}
         setFreeCheckBox={setFreeCheckBox}
         setProCheckBox={setProCheckBox}
         />

         <div className="colorpicker">
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
         <Link to='/resume/edit/resume1'>
         <img src={Photo1} className="App-logo" alt="logo" />
         </Link>
         <Link to='/resume/edit/resume2'>
         <img src={Photo2} className="App-logo" alt="logo" />
         </Link>
         </div>
        </div>
    )
}

export default Resumes;