// components/PageLoading.js
import React, { useState, useEffect } from 'react';

const PageLoading = ({ timeout, fallbackContent }) => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, timeout || 4000);

    return () => clearTimeout(timer);
  }, [timeout]);

  return showFallback ? (
    <div>{fallbackContent || 'Nothing found'}</div>
  ) : (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '70vh' }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default PageLoading;