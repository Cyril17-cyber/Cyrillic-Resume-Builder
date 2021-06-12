import React from 'react';
import Fab from '@material-ui/core/Fab';
import EyeCon from '@material-ui/icons/RemoveRedEye'
import Resume1 from './Resume1';
import Input from '../resumeComponents/Input';
import { Link } from 'react-router-dom';

function Resume1Texts(props) {
    
    return (
            <div className="editor">
            <div className="hint">
                <h2>What's the best way for employer's to contact you?</h2>
                <h3>We suggest you add an email and a phone number</h3>

                <em>Click on items you wish to delete.</em>
            </div>
        <div className="resumeEditor">
            <Input
            Data={props.Data}
            icon={props.icon}
            setIcon={props.setIcon}
            name={props.name}
            clickl1={props.clickl1}
            changeL1={props.changeL1}
            valuel1={props.valuel1}
            clickl2={props.clickl2}
            changeL2={props.changeL2}
            valuel2={props.valuel2}
            clickl3={props.clickl3}
            changel3={props.changel3}
            valuel3={props.valuel3}
            clicklink={props.clicklink}
            changelink={props.changelink}
            valuelink={props.valuelink}
             />
            <div className="resumeContent">
            <div className="resume">
            <Resume1
            links={props.links}
             Data={props.Data}
            FirstLis={props.FirstLis}
            SecondLis={props.SecondLis}
            ThirdLis={props.ThirdLis}
            deleteFirstLi={props.deleteFirstLi}
            deleteSecondLi={props.deleteSecondLi}
            deleteThirdLi={props.deleteThirdLi}
            deleteLink={props.deleteLink}
             />
            </div>
            <div className="button">
            <Link to='/resume1/print'>
            <Fab>
                <EyeCon />
            </Fab>
            </Link>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Resume1Texts;