import './App.css'
import {Provider} from "react-redux";
import ageStore from "./redux/ageStore.js";
import AgeDisplay from "./components/AgeDisplay.jsx";
import AgeControls from "./components/AgeControls.jsx";

function App() {

    return (
        <>
            <Provider store={ageStore}>
                <AgeDisplay/>
                <AgeControls/>
            </Provider>
        </>
    )
}

export default App
