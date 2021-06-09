import React from "react";

function LeftTexts(props) {
    return (
        <div className="main darker">
            <img src={props.image} alt="svg illustration" srcSet=""/>

            <div className="main__texts">
                <h1>
                    {props.head}
                </h1>

                <p>{props.content}</p>

                {props.link && <button className="pro">Go Pro</button>}
            </div>
        </div>
    );
}

export default LeftTexts;