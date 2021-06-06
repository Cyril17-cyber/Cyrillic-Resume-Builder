import React from "react";
import FirstSvg from "../images/undraw_add_to_cart_vkjp.svg";
import SecondSvg from "../images/undraw_Confirmation_re_b6q5.svg";
import ThirdSvg from "../images/undraw_Credit_card_re_blml.svg";
import LastSvg from "../images/undraw_web_developer_p3e5.svg";
import RightTexts from "./RightTexts";
import LeftTexts from "./LeftTexts";

function Home(props) {
    var statement;
    return (
        <div className="home">
            <RightTexts
             head="Next generation Resumes/Cards editor"
             content="Take little to no stress at all in designing resumes and card rated high quality by professionls. Create stylish beautiful resumes and cards on the fly."
             image={FirstSvg}
             link={statement = true}
             />

            <LeftTexts
             head="Top notch designs"
             content="Free access to top quility and top rated resume and card designs by profession artists."
             image={SecondSvg}
             link={statement = false}
             />

            <RightTexts
             head="Future pro version."
             content="In a future version, you will be permitted to get access to the pro version where you'll unlock cooler designs and build cards and resumes from scratch."
             image={ThirdSvg}
             link={statement = false}
             />

            <LeftTexts
             head="Free and easy to use"
             content="The Cyrillic Resume And Cards builder was built and designed with a user friendly UX and an eye appeasing UI making it easy to use."
             image={LastSvg}
             link={statement = false}
             />
        </div>
    );
}

export default Home;
