import { useState } from 'react'
import './App.css'
import {Provider} from "react-redux";
import todoStore from "./redux/todoStore";
import TodoManager from "./components/TodoManager.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Provider store={todoStore}>
            <TodoManager/>
        </Provider>
    </>
  )
}

export default App
