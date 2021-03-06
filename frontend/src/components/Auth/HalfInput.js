import React from "react";

const HalfInput = ({ label, id, value, onChange }) => {
  return (
    <div className="w-1/2 px-3 mb-5">
      <label htmlFor={id} className="mb-1 text-sm sm:text-base text-gray-600">
        {label} :
      </label>
      <div className="flex">
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center text-gray-400">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
        </div>
        <input
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          type="text"
          className="w-full -mr-10 pr-10 pl-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700"
          placeholder="هارون"
          max="128"
          min="8"
        />
      </div>
    </div>
  );
};

export default HalfInput;
