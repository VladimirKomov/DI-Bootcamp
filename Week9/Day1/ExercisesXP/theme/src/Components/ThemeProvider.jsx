import React, {createContext, useEffect, useState} from 'react';
import ThemeSwitcher from "./ThemeSwitcher.jsx";

export const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeSwitcher/>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;