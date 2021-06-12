import React from 'react';

class Resume2 extends React.Component {

    render() {
        return(
            <div className="resume2">
                <div className="LeftSide">
                        <div className="top">
                        <h1 className="name">{this.props.Data.Fname} {this.props.Data.Lname}</h1>
                        <p>{this.props.Data.profession}</p>
                        </div>
                    <div className="linkDiv">
                        {this.props.links.map((link, id) => {
                            return (
                                <div className="links" key={id} onClick={() => this.props.deleteLink(id)}>
                                    {link.icon}
                                    <p>
                                        {link.link}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
    
                    <div className="first content">
                    <h2>{this.props.Data.firstHead}</h2>
                    <ul>
                            {this.props.FirstLis.map((li, id) => {
                                return (
                                    <li onClick={() => this.props.deleteFirstLi(id)} key={id}>{li.li}</li>
                                )
                            })}
                        </ul>
                    </div>
    
                    <div className="second content">
                        <h2>{this.props.Data.secondHead}</h2>
                        <ul>
                            {this.props.SecondLis.map((li, id) => {
                                return (
                                    <li onClick={() => this.props.deleteSecondLi(id)} key={id}>{li.li}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="RightSide">
                    <div className="content summary">
                        <h2>Carrer Objective</h2>
                        <p>{this.props.Data.summary}</p>
                    </div>
    
                    <div className="third content">
                        <h2>{this.props.Data.thirdHead}</h2>
                        <ul>
                            {this.props.ThirdLis.map((li, id) => {
                                return (
                                    <li onClick={() => this.props.deleteThirdLi(id)} key={id}>{li.li}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume2;