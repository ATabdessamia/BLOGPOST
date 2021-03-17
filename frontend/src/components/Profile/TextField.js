import React from "react";

const TextField = ({ onChange, value }) => {
  return (
    <div className="flex bg-gray-700 items-center rounded-md border shadow text-lg mb-2">
      <span className="px-4 py-2 whitespace-no-wrap text-gray-100">
        العنوان
      </span>
      <input
        name="title"
        className="rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-700 text-gray-700"
        type="text"
        autoComplete="off"
        required
        placeholder="اكتب هنا..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextField;
