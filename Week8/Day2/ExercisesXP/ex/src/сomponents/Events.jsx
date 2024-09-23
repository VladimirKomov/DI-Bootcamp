import React from 'react';

const Events = () => {

    const clickMe = () => {
        alert('I was clicked!');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`${event.target.value}`);
        }
    }

    const [isToggleOn, setIsToggleOn] = React.useState(false);

    const changeMe = () => {
        setIsToggleOn(!isToggleOn);
    }

    return (
        <div>
            <button onClick={clickMe}>Click me!</button>
            <br/>
            <br/>
            <input type="text"
                   onKeyDown={handleKeyDown}/>
            <br/>
            <br/>
            <button onClick={changeMe}>
                {isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>
    )
}

export default Events;