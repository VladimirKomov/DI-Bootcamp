import {useState} from 'react'
import './App.css'
import TodoList from "./components/TodoList.jsx";
import TodoProvider from "./components/TodoContext.jsx";


function App() {

    return (
        <>
            <TodoProvider>
                <TodoList/>
            </TodoProvider>
        </>
    )
}

export default App
