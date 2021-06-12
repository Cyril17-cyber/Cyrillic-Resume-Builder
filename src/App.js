import React, { useState } from "react";
import "./scss/styles.css";
import Nav from './components/Nav';
import ProAlert from './components/ProAlert';
import About from './components/About';
import MobileLinks from './components/MobileLinks';
import Footer from './components/Footer';
import Resumes from './components/Resumes';
import Resume1Texts from './components/resumesData/Resume1/resume1Texts';
import PrintResume1 from './components/resumesData/Resume1/PrintResume1';
import Resume2Texts from './components/resumesData/Resume2/resume2Texts';
import PrintResume2 from './components/resumesData/Resume2/PrintResume2';
import Resume3Texts from './components/resumesData/Resume3/Resume3Texts';
import PrintResume3 from './components/resumesData/Resume3/PrintResume3';
import Resume4Texts from './components/resumesData/Resume4/resume4Texts';
import PrintResume4 from './components/resumesData/Resume4/PrintResume4';
import MyResume from './components/MyResume';
import Home from './components/Home';
import {BrowserRouter as Router} from "react-router-dom"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PhoneIcon from "@material-ui/icons/PhoneOutlined";
import UrlIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function App() {
// mobile menu state
  const [mobileMenu, setMobileMenu] = useState(false);

  //Go pro alert
  const [proAlert, setProAlert] = useState(false);

  // setting the mobile menu
  function menuSetter() {
    setMobileMenu((prevValue) => {
        return !prevValue;
    });
    setProAlert(false);
}

//setting the go pro alert
function callProAlert() {
  setProAlert((prevValue) => {
    return !prevValue;
  });
}

// Resume Data
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
  const value = event.target.value;
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
  const value = event.target.value;
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
  const value = event.target.value;
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
  const value = event.target.value;
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
    <Router>
    <div id="App" className={!mobileMenu? "" : "visibleBurger"}>
      <div id="App-header" className={proAlert? "Alert" : ""}>
        <Nav
         menuFunction={menuSetter}
         proAlert={callProAlert}
         />
         {proAlert && <ProAlert alert={callProAlert} />}

         <MobileLinks
          mobileMenu={mobileMenu} 
          menuFunction={menuSetter}
          />

        <Switch>
        <Route path='/' exact>
          <Home proAlert={callProAlert} />
          </Route>
        <Route path='/resume' exact>
          <Resumes proAlert={callProAlert} />
          </Route>
        <Route path='/resume/edit/resume1'>
          <Resume1Texts
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
          links={links}
          FirstLis={FirstLis}
          SecondLis={SecondLis}
          ThirdLis={ThirdLis}
          deleteFirstLi={deleteFirstLi}
          deleteSecondLi={deleteSecondLi}
          deleteThirdLi={deleteThirdLi}
          deleteLink={deletelink}
            />
        </Route>
        <Route path='/resume1/print'>
            <PrintResume1
            Data={ResumeData}
            links={links}
            FirstLis={FirstLis}
            SecondLis={SecondLis}
            ThirdLis={ThirdLis}
            deleteFirstLi={deleteFirstLi}
            deleteSecondLi={deleteSecondLi}
            deleteThirdLi={deleteThirdLi}
            deleteLink={deletelink} 
            />
          </Route> 
        <Route path='/resume/edit/resume2'>
          <Resume2Texts
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
           links={links}
           FirstLis={FirstLis}
           SecondLis={SecondLis}
           ThirdLis={ThirdLis}
           deleteFirstLi={deleteFirstLi}
           deleteSecondLi={deleteSecondLi}
           deleteThirdLi={deleteThirdLi}
           deleteLink={deletelink}
           />
        </Route>
        <Route path='/resume2/print'>
            <PrintResume2
            Data={ResumeData}
            links={links}
            FirstLis={FirstLis}
            SecondLis={SecondLis}
            ThirdLis={ThirdLis}
            deleteFirstLi={deleteFirstLi}
            deleteSecondLi={deleteSecondLi}
            deleteThirdLi={deleteThirdLi}
            deleteLink={deletelink} 
            />
          </Route>
        <Route path='/resume/edit/resume3'>
          <Resume3Texts
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
           links={links}
           FirstLis={FirstLis}
           SecondLis={SecondLis}
           ThirdLis={ThirdLis}
           deleteFirstLi={deleteFirstLi}
           deleteSecondLi={deleteSecondLi}
           deleteThirdLi={deleteThirdLi}
           deleteLink={deletelink}
           />
          </Route>
          <Route path='/resume3/print'>
            <PrintResume3
            Data={ResumeData}
            links={links}
            FirstLis={FirstLis}
            SecondLis={SecondLis}
            ThirdLis={ThirdLis}
            deleteFirstLi={deleteFirstLi}
            deleteSecondLi={deleteSecondLi}
            deleteThirdLi={deleteThirdLi}
            deleteLink={deletelink} 
            />
          </Route>
          <Route path='/resume/edit/resume4'>
          <Resume4Texts
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
           links={links}
           FirstLis={FirstLis}
           SecondLis={SecondLis}
           ThirdLis={ThirdLis}
           deleteFirstLi={deleteFirstLi}
           deleteSecondLi={deleteSecondLi}
           deleteThirdLi={deleteThirdLi}
           deleteLink={deletelink} 
           />
          </Route>
          <Route path='/resume4/print'>
            <PrintResume4
            Data={ResumeData}
            links={links}
            FirstLis={FirstLis}
            SecondLis={SecondLis}
            ThirdLis={ThirdLis}
            deleteFirstLi={deleteFirstLi}
            deleteSecondLi={deleteSecondLi}
            deleteThirdLi={deleteThirdLi}
            deleteLink={deletelink} 
            />
          </Route> 
          <Route path='/my-resume'>
            <MyResume />
          </Route>
          <Route path='/about'>
          <About />
          </Route>
        </Switch>

        <Footer proAlert={callProAlert}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
