import React from "react";

function RightTexts(props) {
    return (
        <div className="main">
            <div className="main__texts">
                <h1>
                    {props.head}
                </h1>

                <p>{props.content}</p>

                {props.link && <button className="pro" onClick={props.proAlert}>Go Pro</button>}
            </div>
            <img src={props.image} alt="svg illustration" srcSet=""/>
        </div>
    );
}

export default RightTexts;