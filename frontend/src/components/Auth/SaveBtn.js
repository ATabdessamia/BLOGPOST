import React from "react";

const SaveBtn = ({ text }) => {
  return (
    <div className="flex w-full">
      <button
        type="submit"
        className="flex items-center justify-center focus:outline-none text-white text-base sm:text-base bg-gray-700 hover:opacity-80 rounded py-2 w-full focus:ring-2 focus:ring-inset focus:ring-gray-100 transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        <span className="mr-2">{text}</span>
        <span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default SaveBtn;
