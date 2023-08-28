'use client'

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [mode, setMode] = useState("dark")

    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };


    const contextValue = {
       
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;