import React from "react";

const Nav = ({ children, className }) => {
  return (
    <nav className={className || "flex flex-row justify-between items-center"}>
      {children}
    </nav>
  );
};

export default Nav;
