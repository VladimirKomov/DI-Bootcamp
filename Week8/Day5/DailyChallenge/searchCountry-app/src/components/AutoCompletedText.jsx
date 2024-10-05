import React, {useEffect} from 'react';
import countries from './Counries.js';

const AutoCompletedText = () => {
    const [countriesFilter, setCountriesFilter] = React.useState([]);
    const [text, setText] = React.useState('');

    useEffect(() => {
        setCountriesFilter(countries.filter(country => country.toLowerCase().startsWith(text.toLowerCase())));
    }, [text])

    return (
        <div>
            <div>
                <h3>Auto Completed</h3>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>
            </div>
            <div>
                {text.length !== 0 &&
                    <>
                        <ul>
                            {countriesFilter.map((country, index) => (
                                <li key={index}>
                                    {country}
                                </li>
                            ))}
                        </ul>
                        <h3>Count: {countriesFilter.length}</h3>
                    </>
                }
            </div>
        </div>
    )
}

export default AutoCompletedText;