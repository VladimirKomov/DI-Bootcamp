import './App.css'
import UserData from "./components/UserData.jsx";
import {Provider} from "react-redux";
import userStore from "./redux/userStore.js";

function App() {

    return (<>
            <Provider store={userStore}>
                <UserData/>
            </Provider>
        </>
    )
}

export default App
