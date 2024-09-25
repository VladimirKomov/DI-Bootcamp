import React, { Component } from 'react';

class BuggyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick = () => {
        this.setState((prevState) => {
            const newCounter = prevState.count + 1;

            if (newCounter === 5) {
                throw new Error('I crashed!');
            }

            return { count: newCounter };
        });
    };

    render() {
        return (
            <div>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}

export default BuggyCounter;
