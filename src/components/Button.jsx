import React from 'react';

const Button = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white px-4 py-2 rounded hover:bg-gray-800 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
