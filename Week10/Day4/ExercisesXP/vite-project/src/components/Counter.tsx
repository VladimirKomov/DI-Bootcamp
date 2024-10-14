import {ReactElement, useState} from "react";

const Counter = (): ReactElement => {
    const [count, setCount] = useState<number>(0);

    const handlePlus = () => {
        setCount(count + 1);
    }

    const handleMinus = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handlePlus}> + </button>
            <button onClick={handleMinus}> - </button>
        </div>
    )
}

export default Counter;