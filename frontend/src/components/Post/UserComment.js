import React from "react";

const UserComment = () => {
  return (
    <div className="flex items-start py-4 hover:bg-gray-100">
      <a href="#/">
        <img src="/images/avatar.svg" alt="avatar" className="w-12 h-12" />
      </a>
      <div className="px-5">
        <div className="inline-flex items-center mb-2 -mr-2">
          <a
            href="#/"
            className="text-gray-700 font-black text-lg font-kufi ml-2"
          >
            اسم المعلق
          </a>
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
