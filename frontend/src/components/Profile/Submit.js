import React from "react";

const Submit = () => {
  return (
    <div className="mt-2 mr-2">
      <button className="bg-gray-700 py-1 px-4 ml-3 text-lg rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:bg-gray-600 text-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow">
        انشر
      </button>
      <button className="bg-gray-200 py-1 px-4 ml-3 text-lg rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white hover:bg-gray-300 text-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow">
        الغاء
      </button>
    </div>
  );
};

export default Submit;
