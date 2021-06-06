import React, { useState } from 'react';
import Resume1 from './Resume1';
import Input from './resumeComponents/Input'

function Resume1Texts() {
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

    const [FirstLis, setFirstLis] = useState([
        {li: "Javascript"},
        {li: "Sass"},
        {li: "HTML"},
        {li: "Css"},
        {li: "React"},
        {li: "Jquey"},
        {li: "Ejs"},
        {li: "Node.js"}
    ]);

    const [SecondLis, setSecondLi] = useState([
        {li: "University"},
        {li: "Other Education history"}
    ]);

    const [ThirdLis, setThirdLi] = useState([
        {li: "Past work history"},
        {li: "Present work (if any)"},
        {li: "Other work history worth noting"}
    ])

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
            <Input />
            <Resume1 Data={ResumeData} click={ResumeCaller} FirstLis={FirstLis} SecondLis={SecondLis} ThirdLis={ThirdLis} />
        </div>
    )
}

export default Resume1Texts;