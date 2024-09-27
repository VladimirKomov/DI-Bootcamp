import React from 'react';
import fetchData from "./FetchData.js";

class Example3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experiences: []
        }
    }
    async componentDidMount() {
        const data = await fetchData('/dataEx3.json');
        this.setState({ experiences: data.Experiences });
    }
    render() {
        return (
            <div>
                {this.state.experiences.map((experience, index) => (
                    <div key={index}>
                        <img src={experience.logo} alt="logo"
                        width='200' height='200' border-radius='100'/>
                        <h3>{experience.companyName}</h3>
                        <a href={experience.url} target="_blank"></a>
                        {experience.roles.map((role, index) => (
                            <div key={index}>
                                <p>{role.title}</p>
                                <p>{role.startDate} {role.location}</p>
                                <p>{role.description}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}

export default Example3;