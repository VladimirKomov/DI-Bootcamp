import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Provider} from "react-redux";
import ageStore from "./redux/ageStore.js";
import AgeCounter from "./components/AgeCounter.jsx";

function App() {

    return (
        <>
            <Provider store={ageStore}>
                <AgeCounter/>
            </Provider>
        </>
    )
}

export default App
