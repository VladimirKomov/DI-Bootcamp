import React, {Fragment} from 'react';
import {useState} from "react";
import Garage from "./Garage.jsx";

const Сar = (props) => {
    const [color, setColor] = useState("red");
    return(
            <h2>
                This car is a {color} {props.mod}
                <Garage size="small" />
            </h2>
    )
}

export default Сar;