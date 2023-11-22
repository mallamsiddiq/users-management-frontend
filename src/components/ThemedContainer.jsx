// ThemedContainer.js
import React from 'react';
import { useTheme } from '../utils/contexts/ThemeContext';

const ThemedContainer = ({ children }) => {
    const { darkMode } = useTheme();


    
    return (
        <div className={` d-flex flex-column min-vh-100 container-fluid pb-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
            {children}
        </div>
    );
};

export default ThemedContainer;
