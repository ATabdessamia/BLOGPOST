import React from "react";

const NavAvatar = ({ text, className, onClick }) => {
  return (
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
  );
};

export default NavAvatar;
