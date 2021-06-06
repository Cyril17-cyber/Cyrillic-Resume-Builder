import React, { useState } from "react";
import Texts from "./subComponents/Texts";
import textArrays from "./Arrays";
import Resume1 from './resumes/Resume1';
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

    const [ResumeData, setResumeData] = useState({
        Fname: "Cyril",
        Lname: "Asogwa",
        email: "Cyril@asogwa.com",
        emailLink: "http://",
        linkedIn: "cyril123456",
        linkedInLink: "http://",
        phone: "09012345678",
        twitter: "@cyril_19",
        twitterLink: "http://",
        url: "cyril.com",
        urlLink: "http://",
        github: "@cyrilAsogwa99",
        gitLink: "http://",
        firstHead: "Skills",
        secondHead: "Education",
        summary: "A full-stack web developer making full stack websites",
        thirdHeader: "Work History"
    });

    function ResumeCaller(event) {
        setResumeData((prevValue) => {
            const {name, value} = event.target;
            return {
                ... prevValue,
                [name]: value
            }
        })
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
             
         </div>

         <div className="ResumeLists">
         <Resume1 Data={ResumeData} click={ResumeCaller} />
         </div>
        </div>
    )
}

export default Resumes;