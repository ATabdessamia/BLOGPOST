import React from "react";

const Form = ({ children, onSubmit }) => {
  return (
    <div className="w-full min-h-screen text-gray-200 bgScreen">
      <form
        className="relative w-full sm:w-1/2 top-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 p-5 rounded-md shadow-2xl opacity-70 bg-gray-900"
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
};

export default Form;
