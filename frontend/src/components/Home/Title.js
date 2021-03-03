import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <h1 className="text-xl font-kufi font-semibold text-gray-700 cursor-pointer hover:opacity-70">
      <Link to="/post"> العنوان الرئيسي</Link>
    </h1>
  );
};

export default Title;
