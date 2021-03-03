import React from "react";

const InputField = ({ label, id, type, max, min, onChange, value }) => {
  return (
    <div className="flex flex-col mb-6">
      <label htmlFor="password" className="mb-1 text-base sm:text-lg">
        {label} :
      </label>
      <div className="relative">
        <div className="inline-flex items-center justify-center absolute right-0 top-0 h-full w-10 text-gray-200">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <input
          id={id}
          type={type}
          name={id}
          value={value}
          onChange={onChange}
          className="text-base sm:text-lg bg-gray-900 text-gray-200 pr-10 pl-4 rounded-lg border-2 border-gray-200 w-full py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
