import React, {Component} from 'react';
import fetchData from "./FetchData.js";

class Example2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        };
    }
    async componentDidMount() {
        const data = await fetchData('/dataEx3.json');
        this.setState({ skills: data.Skills });
    }
    render() {
        return (
            <div>
                {this.state.skills.map((skillArea, index) => (
                    <div key={index}>
                        <h3>{skillArea.Area}</h3>
                        <ul>
                            {skillArea.SkillSet.map((skill, skillIndex) => (
                                <li key={skillIndex} style={{color: skill.Hot ? 'red' : 'black'}}>
                                    {skill.Name} {skill.Hot ? '(Hot)' : ''}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}

export default Example2;