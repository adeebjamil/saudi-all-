import React from 'react';

const Loading = () => {
  return (
    <div
      className="flex justify-center items-center h-screen text-white"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <h2 className="text-xl">Loading...</h2>
    </div>
  );
};

export default React.memo(Loading);
