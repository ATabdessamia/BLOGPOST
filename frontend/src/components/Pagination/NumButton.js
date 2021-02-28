import React from "react";

const NumButton = ({ active, key, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-95 px-2 border-gray-900 ${active}`}
      key={key}
    >
      {text}
    </button>
  );
};

export default NumButton;
