import React, {useEffect, useState} from 'react';
import {getRandomColor, getRandomQuote} from "./modelGenerator.js";
import './Generator.css'; // Подключаем CSS

const Generator = () => {
    const [quote, setQuote] = useState(getRandomQuote());
    const [color, setColor] = useState(getRandomColor());

    useEffect(() => {
        document.body.style.backgroundColor = color.backgroundColor;
        console.log(color);
    });

    const handleQuote = () => {
        setQuote(getRandomQuote());
        setColor(getRandomColor());
    }

    return (
        <div className="container">
            <p className="quoteText" style={{ color: color.backgroundColor }}>{quote.quote}</p>
            <p className="authorText" style={{ color: color.backgroundColor }}>{quote.author}</p>
            <div className="buttonContainer">
                <button className="newQuoteButton" onClick = {handleQuote} style={{ backgroundColor: color.backgroundColor }}>
                    New Quote
                </button>
            </div>
        </div>
    );
}

export default Generator;
