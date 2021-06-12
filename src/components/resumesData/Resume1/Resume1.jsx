import React from 'react';


class Resume1 extends React.Component {
    render() {
        return (
            <div className="resume1">

        <div className="LeftSide">

            <div className="LeftSide__top">
                <div className="top">
                <h1 className="name">
                    {this.props.Data.Fname} {this.props.Data.Lname}
                </h1>
                <p className="profession">
                    {this.props.Data.profession}
                </p>
                </div>
                <div className="contacts">
                    
                    {this.props.links.map((links, id) => {
                        return (
                            <div className="links" key={id} onClick={() => this.props.deleteLink(id)}>
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
                    {this.props.Data.firstHead}
                </h2>
                <ul>
                    {this.props.FirstLis.map((li, id) => {
                        return (
                            <li onClick={() => this.props.deleteFirstLi(id)} key={id}>{li.li}</li>
                        )
                    })}
                </ul>

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
            <div className="RightSide__top">
                <h2>Professional Summary</h2>
                <p>{this.props.Data.summary}</p>
            </div>
            <div className="RightSide__bottom">
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

export default Resume1;