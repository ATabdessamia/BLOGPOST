import React from "react";

const NavLink = ({ text, className, href }) => {
  return (
    <a
      href={href}
      className={
        className ||
        "block px-4 py-2 text-lg text-gray-700 hover:bg-gray-200 cursor-pointer"
      }
    >
      {text}
    </a>
  );
};

export default NavLink;
