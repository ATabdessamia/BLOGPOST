import React from "react";

const Avatar = () => {
  return (
    <div className="sm:w-1/2 mx-auto mt-10 w-full">
      <div className="border-t-8 border-gray-700  rounded">
        <div className="flex justify-center">
          <img
            className="rounded-full block bg-gray-600 shadow-lg border-gray-600 border-4 w-28 h-28 -mt-20"
            src="images/avatar.svg"
            alt="avatar"
          />
        </div>
        <div className="p-2 text-center">
          <span className="text-lg font-black text-gray-700 ml-2 font-kufi">
            جون دو
          </span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
