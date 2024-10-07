import {useState} from 'react'
import './App.css'
import {Provider} from "react-redux";
import booksStore from "./redux/booksStore.js";
import BooksList from "./components/BooksList.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Provider store={booksStore}>
                <BooksList/>
            </Provider>
        </>
    )
}

export default App
