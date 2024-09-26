import React from 'react';
import '../App.css';

const FormComponent = ({inputs}) => {
    return (
        <div id="formComponent">
            <h1>Entered information:</h1>
            <p>Your name: {inputs.firstName} {inputs.lastName}</p>
            <p>Your age: {inputs.age}</p>
            <p>Your gender: {inputs.gender}</p>
            <p>Your destination: {inputs.destination}</p>
            <p>Your dietary restrictions:</p>
            <span>**Nuts free: {inputs.nutsFree?'Yes':'No'}</span>
            <br/>
            <span>**Lactose free: {inputs.lactoseFree?'Yes':'No'}</span>
            <br/>
            <span>**Vegan meal: {inputs.vegan?'Yes':'No'}</span>
        </div>
    )
}

export default FormComponent;