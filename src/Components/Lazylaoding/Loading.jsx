import React from 'react';

const Loading = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-black/50"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <h2 className="text-xl text-white">Loading...</h2>
    </div>
  );
};

export default React.memo(Loading);
