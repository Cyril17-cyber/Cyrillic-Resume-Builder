import React from 'react';

function Resume2(props) {
    return(
        <div className="resume2">
            <div className="LeftSide">
                    <div className="top">
                    <h1 className="name">{props.Data.Fname} {props.Data.Lname}</h1>
                    <p>{props.Data.profession}</p>
                    </div>
                <div className="linkDiv">
                    {props.links.map((link, id) => {
                        function handleClick() {
                            props.deleteLink(id)
                        }
                        return (
                            <div className="links" key={id} onClick={handleClick}>
                                {link.icon}
                                <p>
                                    {link.link}
                                </p>
                            </div>
                        )
                    })}
                </div>

                <div className="first content">
                <h2>{props.Data.firstHead}</h2>
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
                </div>

                <div className="second content">
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
                <div className="content summary">
                    <h2>Carrer Objective</h2>
                    <p>{props.Data.summary}</p>
                </div>

                <div className="third content">
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

export default Resume2;