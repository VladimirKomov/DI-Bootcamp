import React, {Component, useState} from 'react';

const Events = () => {

    const clickMe = () => {
        alert('I was clicked!');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`${event.target.value}`);
        }
    }

    const [state, setState] = useState({
        isToggleOn: false,
        show: true
    });

    const changeMe = () => {
        setState(prevState => ({
            ...prevState,
            isToggleOn: !prevState.isToggleOn
            })
        )
    }

    const delMe = () => {
        setState(prevState => ({
            ...prevState,
            show: false
            })
        )
    }

    return (
        <div>
            <br/>
            {state.show && <Child/>}
            <button onClick={delMe}>Del me</button>
            <br/>
            <br/>
            <button onClick={clickMe}>Click me!</button>
            <br/>
            <br/>
            <input type="text"
                   onKeyDown={handleKeyDown}/>
            <br/>
            <br/>
            <button onClick={changeMe}>
                {state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>
    )
}

class Child extends Component {
    componentWillUnmount() {
        alert('Child will unmounted!');
    }

    render() {
        return (
                <h1>Hello World!</h1>
        );
    }
}

export default Events;