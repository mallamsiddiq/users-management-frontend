// ThemeToggle.js
import React from 'react';
import { useTheme } from '../utils/contexts/ThemeContext';
import { Link } from 'react-router-dom';

const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useTheme();

    const switchClass = darkMode
    ? 'form-check-input bg-info border-info'
    : 'form-check-input bg-primary border-primary';

    return (
        <div className="form-check form-switch border-info">
        <input
            className={switchClass}
            type="checkbox"
            id="flexSwitchCheckDefault"
            checked={darkMode}
            onChange={toggleTheme}
        />
        </div>
    );
};

export default ThemeToggle;


const CustomNavLink = ({ to, children, className }) => {
    
    const { darkMode, } = useTheme();
    return (
      <Link
        to={to || '/'}
        className={`${className} nav-link text-${darkMode ? 'light' : 'dark'}`}
      >
        {children}
      </Link>
    );
};

const ThemeLink = ({ to, children, className }) => {
    
    const { darkMode, } = useTheme();
    return (
      <Link
        to={to || '/'}
        className={`${className} text-${darkMode ? 'primary' : 'info'}`}
      >
        {children}
      </Link>
    );
};

const ThemeButton = ({ isFormValid, onClick, children }) => {
    
    const { darkMode } = useTheme();
    return (
        <button 
            type="submit"  className={ darkMode? 'btn btn-primary' : 'btn btn-info'} 
            onClick={onClick}
            disabled={isFormValid && !isFormValid()}>
            {children}
        </button>
    );
};



export {CustomNavLink, ThemeButton, ThemeLink}
