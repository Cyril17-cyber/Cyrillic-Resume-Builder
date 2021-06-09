import React from 'react';


function Resume1(props) {
    
    return (
                <div className="resume1">

            <div className="LeftSide">

                <div className="LeftSide__top">
                    <div className="top">
                    <h1 className="name">
                        {props.Data.Fname} {props.Data.Lname}
                    </h1>
                    <p className="profession">
                        {props.Data.profession}
                    </p>
                    </div>
                    <div className="contacts">
                        
                        {props.links.map((links, id) => {
                            function handleClick() {
                                props.deleteLink(id)
                            }
                            return (
                                <div className="links" key={id} onClick={handleClick}>
                                    {links.icon}
                                <p>
                                    {links.link}
                                </p>
                            </div>
                            )
                        })}
                    </div>
                </div>

                <div className="LeftSide__bottom">
                    <h2 className="firstHead">
                        {props.Data.firstHead}
                    </h2>
                    <ul>
                        {props.FirstLis.map((li, id) => {
                            function handleClick() {
                                props.deleteFirstLi(id)
                            }
                            return (
                                <li onClick={handleClick} key={id}>{li.li}</li>
                            )
                        })}
                    </ul>

                    <h2>{props.Data.secondHead}</h2>
                    <ul>
                        {props.SecondLis.map((li, id) => {
                            function handleClick() {
                                props.deleteSecondLi(id)
                            }
                            return (
                                <li onClick={handleClick} key={id}>{li.li}</li>
                            )
                        })}
                    </ul>
                </div>

            </div>

            <div className="RightSide">
                <div className="RightSide__top">
                    <h2>Professional Summary</h2>
                    <p>{props.Data.summary}</p>
                </div>
                <div className="RightSide__bottom">
                    <h2>{props.Data.thirdHead}</h2>

                    <ul>
                        {props.ThirdLis.map((li, id) => {
                            function handleClick() {
                                props.deleteThirdLi(id)
                            }
                            return (
                                <li onClick={handleClick} key={id}>{li.li}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Resume1;