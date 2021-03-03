import React from "react";
import { Link } from "react-router-dom";

const NavAvatar = ({ to, text, className, onClick }) => {
  return (
    <Link to={to}>
      <button
        className={
          className ||
          "bg-gray-800 flex text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        }
        onClick={onClick}
      >
        {text || (
          <>
            <span className="sr-only">فتح قائمة المستخدم</span>
            <img
              className="h-16 w-16 rounded-full"
              src="images/avatar.svg"
              alt="avatar"
            />
          </>
        )}
      </button>
    </Link>
  );
};

export default NavAvatar;
