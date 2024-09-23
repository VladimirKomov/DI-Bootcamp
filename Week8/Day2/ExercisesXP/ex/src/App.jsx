import './App.css'
import Сar from "./сomponents/Car.jsx";
import Events from "./сomponents/Events.jsx";
import React from "react";
import Phone from "./сomponents/Phone.jsx";
import Color from "./сomponents/Color.jsx";

// #1 In App.js create an object
const carinfo = {name: "Ford", model: "Mustang"};

function App() {
    return (
        <div>
            <Сar mod = {carinfo.model}/>
            <Events/>
            <Phone/>
            <Color/>
        </div>
    )
}

export default App
