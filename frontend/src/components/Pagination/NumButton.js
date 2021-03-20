import React from "react";
import { Link } from "react-router-dom";

const NumButton = ({ active, text, onClick, to }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-95 px-2 border-gray-900 ${active}`}
    >
      {text}
    </Link>
  );
};

export default NumButton;
