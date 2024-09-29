import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeProvider.jsx";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div>
            <button onClick={toggleTheme}>Toggle Theme to {
                theme === "light" ? "dark" : "light"}</button>
        </div>
    )
}

export default ThemeSwitcher;