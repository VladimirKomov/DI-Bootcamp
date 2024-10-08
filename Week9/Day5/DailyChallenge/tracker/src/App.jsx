import { useState } from 'react'
import './App.css'
import {Provider} from "react-redux";
import tasksStore from "./redux/tasksStore.js";
import TaskList from "./components/TaskList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Provider store={tasksStore}>
            <TaskList/>
        </Provider>
    </>
  )
}

export default App
