import React, {Component} from 'react';
import fetchData from "./FetchData.js";

class Example1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socialMedias: []
        };
    }
    async componentDidMount() {
        const data = await fetchData('/dataEx3.json');
        this.setState({ socialMedias: data.SocialMedias });
    }

    render() {
        return (
            <div>
                <h3>Social Medias</h3>
                <ul>
                    {this.state.socialMedias.map((socialMedia, index) => (
                        <li key={index}>
                            <a href={socialMedia}
                               target="_blank">
                                {socialMedia}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default Example1;