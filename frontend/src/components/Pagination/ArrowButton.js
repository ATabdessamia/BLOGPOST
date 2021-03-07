import React from "react";

const ArrowButton = ({ children, onClick }) => {
  return (
    <button
      className="hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-95 mx-1"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </button>
  );
};

export default ArrowButton;
