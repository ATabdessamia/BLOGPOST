import React from "react";

const TextArea = ({ onChange, value }) => {
  return (
    <div className="my-2">
      <textarea
        className="rounded-md border shadow focus:outline-none focus:ring-2 focus:ring-gray-700 p-2 text-gray-700 text-lg font-semibold leading-relaxed tracking-wider text-justify"
        placeholder="اكتب الموضوع هنا..."
        required
        name="description"
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextArea;
