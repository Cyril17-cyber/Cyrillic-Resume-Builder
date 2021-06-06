import React from "react";
import Texts from "./subComponents/Texts";
import textArrays from "./Arrays";


function Cards() {
    return (
        <Texts
         h1={textArrays[1].h1}
         descr={textArrays[1].description}
         />
    )
}

export default Cards;