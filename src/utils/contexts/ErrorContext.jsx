// contexts/ErrorContext.js
import { createContext, useContext, useState } from 'react';

const ErrorContext = createContext();

export const useError = () => {
  return useContext(ErrorContext);
};

export const ErrorProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState({
    message : '',
    type : ''
  });

  const setError = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage({});
    }, 4000); // Hide the error message after 5 seconds
  };

  return (
    <ErrorContext.Provider value={{ errorMessage, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};
