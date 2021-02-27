import React from "react";

const InputField = ({ name, label, svg, id, type, max, min }) => {
  return (
    <div className="flex flex-col mb-6">
      <label htmlFor={id} className="mb-1 text-sm sm:text-base text-gray-600">
        {label} :
      </label>
      <div className="relative">
        <div className="inline-flex items-center justify-center absolute right-0 top-0 h-full w-10 text-gray-400">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d={svg} />
          </svg>
        </div>

        <input
          id={id}
          type={type}
          name={name}
          className="text-sm sm:text-base text-gray-700 pr-10 pl-4 rounded-lg border-2 border-gray-200 w-full py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
          placeholder={label}
          required
          maxLength={max}
          minLength={min}
        />
      </div>
    </div>
  );
};

export default InputField;
