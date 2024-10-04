import { useState } from 'react'
import './App.css'
import {Provider} from "react-redux";
import taskStore from "./redux/taskStore";
import TaskManager from "./components/TaskManager.jsx";

function App() {

  return (
    <>
    <Provider store={taskStore}>
        <TaskManager/>
    </Provider>
    </>
  )
}

export default App
