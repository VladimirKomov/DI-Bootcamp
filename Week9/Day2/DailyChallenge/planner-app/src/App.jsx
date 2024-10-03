import './App.css'
import {Provider} from "react-redux";
import TaskManager from "./components/TaskManager.jsx";
import store from "./redux/store.js";

function App() {

  return (
    <>
        <Provider store={store}>
            <h1>Daily Planner</h1>
            <TaskManager/>
        </Provider>
    </>
  )
}

export default App
