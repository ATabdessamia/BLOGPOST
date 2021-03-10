import React from "react";

const NavBrand = () => {
  return (
    <div className="flex justify-end items-center">
      <div>
        <img
          src="/images/brand.svg"
          alt="history of islam logo"
          className="block h-10 w-auto"
        />
      </div>
      <span className="font-kufi mr-2 text-lg">التاريخ الإسلامي</span>
    </div>
  );
};

export default NavBrand;
