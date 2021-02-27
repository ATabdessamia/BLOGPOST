import React from "react";

const Footer = () => {
  return (
    <>
      <div className="p-24"></div>
      <footer className="p-5 text-center mt-24 absolute bottom-0  bg-gray-700 text-gray-200 font-black w-full">
        <div className="flex items-center justify-around">
          <p className="sm:text-lg text-base">المؤسس هارون الرشيد</p>
          <p className="sm:text-2xl text-xl">جميع الحقوق محفوظة &copy; 2021</p>
          <p className="sm:text-lg text-base">فريق العاطلين</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
