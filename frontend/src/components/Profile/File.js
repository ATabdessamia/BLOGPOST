import React from "react";

const File = ({ onChange, value }) => {
  return (
    <div className="my-2">
      <label className="w-full flex justify-center items-center px-4 py-1 bg-gray-200 text-gray-700 my-1 tracking-wide border border-gray-700 cursor-pointer hover:bg-gray-300 hover:text-gray-900 rounded">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mr-2 text-base leading-normal">اختر صورة للموضوع</span>
        <input
          type="file"
          className="hidden"
          required
          name="cover"
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
};

export default File;
