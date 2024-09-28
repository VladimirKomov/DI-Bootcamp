import React, { useState } from 'react';
import './Calc.css';

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operation, setOperation] = useState('add');
    const [result, setResult] = useState(0);

    const handleCalculate = () => {
        let res;
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        switch (operation) {
            case 'add':
                res = number1 + number2;
                break;
            case 'subtract':
                res = number1 - number2;
                break;
            case 'multiply':
                res = number1 * number2;
                break;
            case 'divide':
                res = number2 !== 0 ? number1 / number2 : 'Error';
                break;
            default:
                res = 'Error';
        }

        setResult(res);
    };

    return (
        <div className="Calculator-container">
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
            </select>
            <button onClick={handleCalculate}>Calc</button>
            <p>Result: <span>{result}</span></p>
        </div>
    );
};

export default Calculator;