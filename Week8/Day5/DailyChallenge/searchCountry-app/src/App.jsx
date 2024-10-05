import { useState } from 'react'

import './App.css'
import AutoCompletedText from "./components/AutoCompletedText.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AutoCompletedText/>
    </>
  )
}

export default App
