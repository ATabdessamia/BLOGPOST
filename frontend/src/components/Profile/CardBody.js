import React from "react";
import moment from "moment";
import "moment/locale/ar-ma";

const CardBody = ({ title, createdAt }) => {
  moment.locale("ar-ma");
  return (
    <div className="p-2">
      <h1 className="block font-kufi text-gray-700 font-semibold text-xl mb-2">
        {title}
      </h1>
      <h4 className="text-sm text-gray-400 y-2">
        {" "}
        نشر {moment(createdAt).fromNow()}
      </h4>
      <div className="mt-2 float-left">
        <button className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-100 transition-transform duration-300 ease-in-out transform hover:scale-105 bg-red-400 text-gray-50 rounded-full">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardBody;
