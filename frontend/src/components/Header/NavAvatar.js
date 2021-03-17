import React from "react";
import { Link } from "react-router-dom";

const NavAvatar = ({ auth, to, text, className, onClick }) => {
  const { photo } = auth.data.data;
  return (
    <Link to={to}>
      <button
        className={
          className ||
          "bg-gray-900 flex text-lg rounded-full focus:outline-none focus:ring focus:ring-offset focus:ring-offset-gray-50 focus:ring-gray-50 h-16 w-16 justify-center items-center shadow-md"
        }
        onClick={onClick}
      >
        {text || (
          <>
            <span className="sr-only">فتح قائمة المستخدم</span>
            <img
              className="h-14 w-14 rounded-full block bg-gray-900"
              src={`/images/users/${photo}`}
              alt="avatar"
            />
          </>
        )}
      </button>
    </Link>
  );
};

export default NavAvatar;
