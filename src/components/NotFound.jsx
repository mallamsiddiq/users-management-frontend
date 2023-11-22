// components/NotFound.js
import React from 'react';
import { ThemeLink } from './ThemeToggle';
import { useTheme } from '../utils/contexts/ThemeContext';


const NotFound = () => {
    const {darkMode} = useTheme()
  const imageUrl = 'https://source.unsplash.com/800x600/?lost-cat'; // Replace with your desired image parameters

  return (
    <div className="text-center mt-5">
      
      <h2 className="display-4 text-danger">404</h2>
      <p className="lead">Oops! The requested page could not be found.</p>
      <p className={`text-muted ${darkMode && 'text-light'}`}>It seems like you're lost 
        <ThemeLink className="btn btn-link text-decoration-none"> Go home</ThemeLink> </p>
      <img
        src={imageUrl}
        alt="404 Not Found"
        className="img-fluid shadow mb-4"
        style={{ maxWidth: '400px', maxHeight: '400px' }}
      />
    </div>
  );
};

export default NotFound;
