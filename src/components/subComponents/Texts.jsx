import React, { useState } from "react";
import ResumeFilters from "./ResumeFilters";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";


function Texts(props) {
    const [dropDown, setDropDown] = useState(false);
    

    function setIcon() {
        setDropDown((preValue) => {
            return !preValue
        });
    }
    return (
        <div className="resumes">
            <div className="top">
                <h1>{props.h1}</h1>

                <p>{props.descr}</p>
            </div>

            <div className="filterTab">
                <p className="filterTitle">{props.h1}</p>

                <div className="dropDown">
                    <div className="dropDown__texts">
                    <p>Filter</p>
                    <div onClick={setIcon}>
                    {!dropDown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                    </div>
                    </div>

                    {props.h1 === "Resume Templates" ? <ResumeFilters
                    dropDown={dropDown}
                    freeIsChecked={props.checkFree}
                    proIsChecked={props.checkPro}
                    setFreeCheckBox={props.setFreeCheckBox}
                    setProCheckBox={props.setProCheckBox}
                    /> : "Nope"}
                    
                </div>
            </div>
        </div>
    );
}

export default Texts;