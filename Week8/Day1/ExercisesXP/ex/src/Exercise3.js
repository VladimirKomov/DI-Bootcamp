import React from 'react';
import logo from './logo.svg';
import './Exercise.css';

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};
class Exercise extends React.Component {
    render() {
        const containerStyle = {
            padding: '20px',
            borderRadius: '5px',
            border: '2px solid black',
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
        };
        return (
            <div style={containerStyle}>
                <h1 style={style_header}>tag and set its color to red, and the background color to lightblue</h1>
                <p className="para">create a paragraph, a link, a form, an image and a list</p>
                <a href="#">This is a link</a>
                <form>
                    <input type="text" id="name" name="name" />
                    <button type="submit">Submit</button>
                </form>
                <img src={logo} alt="A descriptive text for the logo" />
                <ul>
                    <li>list</li>
                    <li>list 2</li>
                    <li>list 3</li>
                </ul>
            </div>
        );
    }
}

export default Exercise;
