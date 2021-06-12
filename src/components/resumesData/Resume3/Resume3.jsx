import React from 'react';

class Resume3 extends React.Component {
    render() {
        return (
            <div className="resume3">
                <div className="Resumetop">
                    <div className="content">
                        <h1>{this.props.Data.Fname} {this.props.Data.Lname}</h1>
                        <p>{this.props.Data.profession}</p>
                    </div>
                </div>
                <div className="Resumebottom">
                    <div className="leftSide">
                        <div className="leftEntry">
                        <h3>Career Objective</h3>
                        <p>{this.props.Data.summary}</p>
                        </div>
    
                        <div className="leftEntry">
                        <h3>Contacts</h3>
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
    
                        <div className="leftEntry">
                        <h3>{this.props.Data.firstHead}</h3>
                        <ul>
                            {this.props.FirstLis.map((li, id) => {
                                return (
                                    <li onClick={() => this.props.deleteFirstLi(id)} key={id}>{li.li}</li>
                                )
                            })}
                        </ul>
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="rightEntry">
                        <h3>{this.props.Data.secondHead}</h3>
                        <ul>
                            {this.props.SecondLis.map((li, id) => {
                                return (
                                    <li onClick={() => this.props.deleteSecondLi(id)} key={id}>{li.li}</li>
                                )
                            })}
                        </ul>
                        </div>
    
                        <div className="rightEntry">
                        <h3>{this.props.Data.thirdHead}</h3>
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
            </div>
        )
    }
}

export default Resume3;