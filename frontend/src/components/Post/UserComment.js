import React from "react";
import { Link } from "react-router-dom";

const UserComment = () => {
  return (
    <div className="flex items-start py-4 hover:bg-gray-100">
      <Link to="/profile">
        <img src="/images/avatar.svg" alt="avatar" className="w-12 h-12" />
      </Link>
      <div className="px-5">
        <div className="inline-flex items-center mb-2 -mr-2">
          <Link
            to="/profile"
            className="text-gray-700 font-black text-lg font-kufi ml-2"
          >
            اسم المعلق
          </Link>
          <span className="text-gray-500 text-sm">علق قبل 5 دقائق</span>
        </div>
        <div className="text-base text-gray-700">
          <p>رائع جميل استمر</p>
        </div>
      </div>
    </div>
  );
};

export default UserComment;
