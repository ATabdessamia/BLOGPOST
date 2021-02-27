import React from "react";

const AuthBtn = () => {
  return (
    <div className="flex w-full">
      <button
        type="submit"
        className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-gray-700 hover:opacity-80 rounded py-2 w-full focus:ring-2 focus:ring-inset focus:ring-gray-100 transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        <span className="mr-2">تسجيل الدخول</span>
        <span>
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default AuthBtn;
