import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ text, className, to, onClick }) => {
  return (
    <Link
      to={to}
      className={
        className ||
        "block px-4 py-2 text-lg text-gray-700 hover:bg-gray-200 cursor-pointer"
      }
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default NavLink;
