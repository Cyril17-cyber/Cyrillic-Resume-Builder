import React, { useState } from "react";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PhoneIcon from "@material-ui/icons/PhoneOutlined";
import UrlIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function Input(props) {

    const [dropDown, setDropDown] = useState(false);

    function dropDownSetter() {
        setDropDown((prevValue) => {
            return !prevValue;
        });
    }

    function twitter() {
        props.setIcon(<TwitterIcon />);
    };
    function linkedIn() {
        props.setIcon(<LinkedInIcon />);
    }
    function phone() {
        props.setIcon(<PhoneIcon />);
    };
    function email() {
        props.setIcon(<EmailIcon />);
    }
    function github() {
        props.setIcon(<GitHubIcon />);
    };
    function url() {
        props.setIcon(<UrlIcon />);
    }
    return (
        <div className="inputDiv">
            <div className="names">
            <div className="Fname">
                <p className="label">First Name</p>
                <input name="Fname" value={props.Data.Fname} onChange={props.name}/>
            </div>
            <div className="Lname">
                <p className="label">Last Name</p>
                <input name="Lname" value={props.Data.Lname} onChange={props.name}/>
            </div>
            </div>
            <div className="profession newInput">
                <p className="label">
                    Profession
                </p>
                <input name="profession" value={props.Data.profession} onChange={props.name}/>
            </div>

            <form className="Linkform newInput">
            <p className="label">Contact Links</p>
            <div className="Linkinput">
                {props.icon}
            <input name="link" placeholder="link"
             onChange={props.changelink} onClick={dropDownSetter} value={props.valuelink}
             />
            
             {dropDown? <ArrowDropUpIcon  onClick={dropDownSetter} />: <ArrowDropDownIcon  onClick={dropDownSetter} />}

             <Zoom in={dropDown? false : true}>
                <Fab onClick={props.clicklink}>
                    <AddIcon />
                </Fab>
            </Zoom>
            </div>
                {dropDown &&
                    <div className="options">
                    <p onClick={twitter}>Twitter</p>
                    <p onClick={linkedIn}>LinkedIn</p>
                    <p onClick={phone}>Phone</p>
                    <p onClick={github}>GitHub</p>
                    <p onClick={email}>Email</p>
                    <p onClick={url}>Url</p>
                    </div>
                }
            </form>

            <div className="FS newInput">
                <div className="FirstHeader">
                <p className="label">First Heading</p>
            <input name="firstHead" value={props.Data.firstHead} onChange={props.name}/>
                </div>
                <div className="SecondHeaders">
                <p className="label">Second Heading</p>
            <input name="secondHead" value={props.Data.secondHead} onChange={props.name}/>
                </div>
            </div>
            
            <div className="FS newInput">
            <form className="firstList">
                <p className="label">First List Item</p>
            <div>
            <input name="li" placeholder="list item"
             onChange={props.changeL1} value={props.valuel1}
             />
             <Fab onClick={props.clickl1}>
                    <AddIcon />
                </Fab>
            </div>
            </form>

            <form className="firstList">
                <p className="label">Second List Item</p>
            <div>
            <input name="li" placeholder="list item"
             onChange={props.changeL2} value={props.valuel2}
             />
             <Fab onClick={props.clickl2}>
                    <AddIcon />
                </Fab>
            </div>
            </form>
            </div>

            <div className="newInput">
                <div className="label">Professional History</div>

                <textarea name="summary" cols="30" placeholder="Summary" rows="10" value={props.Data.summary} onChange={props.name}></textarea>
            </div>

            <div className="FS newInput">
            <div className="ThirdHeader">
                <p className="label">Third Heading</p>
            <input name="thirdHead" value={props.Data.thirdHead} onChange={props.name}/>
                </div>

                <form className="firstList">
                <p className="label">Third List Item</p>
            <div>
            <input name="li" placeholder="list item"
             onChange={props.changel3} value={props.valuel3}
             />
             <Fab onClick={props.clickl3}>
                    <AddIcon />
                </Fab>
            </div>
            </form>
            </div>
        </div>
    )
}

export default Input;