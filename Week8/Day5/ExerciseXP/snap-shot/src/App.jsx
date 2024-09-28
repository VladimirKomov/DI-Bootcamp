import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import MainImage from './components/MainImage.jsx';


function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Navigate to="/nature" />} />
                    <Route path=":category" element={<MainImage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;