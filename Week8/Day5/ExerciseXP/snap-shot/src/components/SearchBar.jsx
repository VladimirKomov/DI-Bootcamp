import React, {useState} from 'react';

const SearchBar = ({handleNavigate}) => {
    const [input, setInput] = useState('');

    const handleSearch = () => {
        if (input.trim()) {
            handleNavigate(input);
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="search-bar">
            <input type="text"
                   value={input} placeholder="Search..."
                   onChange={(e) => setInput(e.target.value)}
                   onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;