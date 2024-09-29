import React, {useEffect, useRef, useState} from 'react';

const CharacterCounter = () => {
    const inputRef = useRef(null);
    const [textLength, setTextLength] = useState(0);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleInputChange = () => {
        const textLength = inputRef.current.value.length;
        setTextLength(textLength);
    };

    return (
        <div>
            <h2>Character Counter</h2>
            <textarea
                ref={inputRef}
                onChange={handleInputChange}
                placeholder='Type some characters....'
            />
            <p>Character Count: {textLength}</p>
        </div>
    );
};

export default CharacterCounter;