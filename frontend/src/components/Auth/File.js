import React from "react";

const File = ({ auth }) => {
  const { photo } = auth.data.data;
  return (
    <div className="my-6 flex">
      <div className="w-24 ml-2 bg-gray-900 rounded-full">
        <img
          src={`/images/users/${photo}`}
          alt="avatar"
          className="block bg-gray-900 border-4 rounded-full border-gray-200"
        />
      </div>
      <label className="flex items-end py-2 bg-transparent text-gray-700 my-1 tracking-wide border-b border-gray-700 cursor-pointer hover:border-gray-500 hover:text-gray-500 rounded">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mr-2 text-base leading-normal">اختر صورة مناسبة</span>
        <input type="file" className="hidden" required />
      </label>
    </div>
  );
};

export default File;
