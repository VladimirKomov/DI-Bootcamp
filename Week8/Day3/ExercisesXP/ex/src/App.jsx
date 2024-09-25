import { useState } from 'react'
import './App.css'
import BuggyCounter from "./Componets/BuggyCounter.jsx";
import ErrorBoundary from "./Componets/ErrorBoundary.jsx";
import Color from "./Componets/Color.jsx";
import Events from "./Componets/Events.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ErrorBoundary>
            <BuggyCounter/>
            <BuggyCounter/>
        </ErrorBoundary>
        <ErrorBoundary>
            <BuggyCounter/>
        </ErrorBoundary>
        <ErrorBoundary>
            <BuggyCounter/>
        </ErrorBoundary>
        <BuggyCounter/>
        <Color/>
        <Events/>
    </>
  )
}

export default App
