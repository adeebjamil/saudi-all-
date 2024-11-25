import React from 'react';

const NotFound = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-blue-800 text-white"
      role="alert"
      aria-label="Page not found"
    >
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    </div>
  );
};

export default React.memo(NotFound);
