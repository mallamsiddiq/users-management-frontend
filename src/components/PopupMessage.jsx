// components/PopupMessage.js
import React, { useEffect } from 'react';
import { useError } from '../utils/contexts/ErrorContext';

const PopupMessage = () => {
  const { errorMessage, setError } = useError();

  const clearError = () => setError({})

  const getColorClass = () => {
    switch (errorMessage.type) {
      case 'success':
        return 'alert-success';
      case 'error':
        return 'alert-danger';
      default:
        return 'alert-info';
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      clearError();
    }, 5000); // Adjust the timeout as needed

    return () => clearTimeout(timerId); // Clear the timer on component unmount

  }, [errorMessage, clearError]);

  return (
    <>
      {errorMessage.message && (
        <div className={`alert ${getColorClass()} alert-dismissible fade show`} role="alert">
          {errorMessage.message}
          <button type="button" className="btn-close" aria-label="Close" onClick={clearError}></button>
        </div>
      )}
    </>
  );
};

export default PopupMessage;
