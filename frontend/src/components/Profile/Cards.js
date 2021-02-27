import React from "react";

const Cards = ({ children }) => {
  return (
    <div className="p-5 sm:w-3/5 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min mx-auto">
      {children}
    </div>
  );
};

export default Cards;
