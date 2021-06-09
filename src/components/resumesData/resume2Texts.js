import React, { useState } from 'react';
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PhoneIcon from "@material-ui/icons/PhoneOutlined";
import UrlIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Resume2 from './Resume2';
import Input from './resumeComponents/Input'

function Resume2Texts() {

    //Resume data
    const [ResumeData, setResumeData] = useState({
        Fname: "Cyril",
        Lname: "Asogwa",
        profession: "Full-stack Developer",
        firstHead: "Skills",
        secondHead: "Education",
        summary: "A full-stack web developer making full stack websites",
        thirdHead: "Work History"
    });

    //Resume Links
    const [icon, setIcon] = useState("");
    const [links, setLinks] = useState([
        {icon: <EmailIcon />,
        link: "Cyril@asogwa.com"},
        {icon: <LinkedInIcon />,
        link: "cyril123456"},
        {icon: <PhoneIcon />, 
            link: "09012345678"},
        {icon: <GitHubIcon />,
            link: "@cyril_19"},
        {icon: <UrlIcon />,
            link: "cyril.com"},
        { icon: <TwitterIcon />,link: "@cyrilAsogwa99"}
        ]);

        //Resume first list items
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

    //Resume second list items
    const [SecondLis, setSecondLi] = useState([
        {li: "University"},
        {li: "Other Education history"}
    ]);

    //Resume third list items
    const [ThirdLis, setThirdLi] = useState([
        {li: "Past work history"},
        {li: "Present work (if any)"},
        {li: "Other work history worth noting"}
    ]);

    //Editing Resume data
    function ResumeCaller(event) {
        setResumeData((prevValue) => {
            const {name, value} = event.target;
            return {
                ... prevValue,
                [name]: value
            }
        })
    }

    //Links' initial input
    const [linkInput, setLinkInput] = useState("");

    //Setting Links' input
    function linkSetter(event) {
        const {name, value} = event.target;
        setLinkInput(value);
    }

    //Saving Links' input
    function linkSaving(event) {
        setLinks((prevValue) => {
            return [
                ... prevValue,
                {icon: icon,
                    link: linkInput}
            ]
        });

        event.preventDefault();

        setLinkInput("");

        setIcon("");
    }

    //Deleting Links
    function deletelink(id) {
        setLinks((prevValue) => {
            return (
                prevValue.filter((link, index) => {
                    return index !==id;
                })
            )
        })
    }

    //First list item's initial input
    const [firstInput, setFirstInput] = useState("");

    //Setting first list item's input
    function inputSetter(event) {
        const {name, value} = event.target;
        setFirstInput(value);
    }

    //Saving first list item's input
    function firstLiSetter(event) {
        setFirstLis((prevValue) => {
            return [
                ... prevValue,
                {li: firstInput}
            ]
        });

        event.preventDefault();

        setFirstInput("")
    }

    //Deleting First list item
    function deleteFirstLi(id) {
        setFirstLis((prevValue) => {
            return (
                prevValue.filter((li, index) => {
                    return index !==id;
                })
            )
        })
    }

    //Second list item's initial input
    const [secondInput, setSecondInput] = useState("");

    //Setting Second list item's input
    function secondInputSetter(event) {
        const {name, value} = event.target;
        setSecondInput(value);
    }

    //Saving Second list item's input
    function secondLiSetter(event) {
        setSecondLi((prevValue) => {
            return [
                ... prevValue,
                {li: secondInput}
            ]
        });

        event.preventDefault();

        setSecondInput("")
    }

    //Deleting Second list item
    function deleteSecondLi(id) {
        setSecondLi((prevValue) => {
            return (
                prevValue.filter((li, index) => {
                    return index !==id;
                })
            )
        })
    }

    //Third list item's initial input
    const [thirdInput, setThirdInput] = useState("");

    //Setting Third list item's input
    function thirdInputSetter(event) {
        const {name, value} = event.target;
        setThirdInput(value);
    }

    //Saveing Third list item's input
    function thirdLiSetter(event) {
        setThirdLi((prevValue) => {
            return [
                ... prevValue,
                {li: thirdInput}
            ]
        });

        event.preventDefault();

        setThirdInput("")
    }

    //Deleting Third list item
    function deleteThirdLi(id) {
        setThirdLi((prevValue) => {
            return (
                prevValue.filter((li, index) => {
                    return index !==id;
                })
            )
        })
    }
    return (
        <div className="editor">
            <div className="hint">
                <h2>What's the best way for employer's to contact you?</h2>
                <h3>We suggest you add an email and a phone number</h3>

                <em>Click on items you wish to delete.</em>
            </div>
        <div className="resumeEditor">
            <Input
            Data={ResumeData}
            icon={icon}
            setIcon={setIcon}
            name={ResumeCaller}
            clickl1={firstLiSetter}
            changeL1={inputSetter}
            valuel1={firstInput}
            clickl2={secondLiSetter}
            changeL2={secondInputSetter}
            valuel2={secondInput}
            clickl3={thirdLiSetter}
            changel3={thirdInputSetter}
            valuel3={thirdInput}
            clicklink={linkSaving}
            changelink={linkSetter}
            valuelink={linkInput}
             />
            <div className="resumeContent">
            <div className="resume">
            <Resume2
            links={links}
             Data={ResumeData}
            FirstLis={FirstLis}
            SecondLis={SecondLis}
            ThirdLis={ThirdLis}
            deleteFirstLi={deleteFirstLi}
            deleteSecondLi={deleteSecondLi}
            deleteThirdLi={deleteThirdLi}
            deleteLink={deletelink}
             />
            </div>
             <button className="pro">
                 Finish
             </button>
            </div>
        </div>
        </div>
    )
}

export default Resume2Texts;