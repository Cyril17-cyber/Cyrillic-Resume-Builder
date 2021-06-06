import React from "react";
import { Link } from "react-router-dom";

function RightTexts(props) {
    return (
        <div className="main">
            <div className="main__texts">
                <h1>
                    {props.head}
                </h1>

                <p>{props.content}</p>

                {props.link && <Link className="pro">Go Pro</Link>}
            </div>
            <img src={props.image} alt="svg illustration" srcSet=""/>
        </div>
    );
}

export default RightTexts;