import React, {Component} from 'react';

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        };
    }

    changeColor = () => {
        if (this.state.color === 'red') {
            this.setState({color: 'blue'});
        } else {
            this.setState({color: 'red'});
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.color !== this.state.color) {
            console.log("after update");
            this.setState({color: 'yellow'});
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate");
    }

    render() {
        return (
            <div>
                <h2>My Favorite Color is <em>{this.state.color}</em></h2>
                <button onClick={this.changeColor}>Change color!</button>
            </div>
        )
    }
}

export default Color;