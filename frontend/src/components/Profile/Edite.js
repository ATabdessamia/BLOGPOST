import React from "react";

const Edite = ({ hidden, id, setCurrentId }) => {
  const onEditeHandler = (e, id) => {
    e.preventDefault();
    setCurrentId(id);
    e.stopPropagation();
  };
  return (
    <div
      className={`absolute top-1 right-2 text-gray-200 ${hidden ? hidden : ""}`}
    >
      <button
        className="focus:outline-none focus:shadow-inner opacity-80 hover:opacity-100 transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={(e) => onEditeHandler(e, id)}
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Edite;
