import React, { useState } from "react";

import Nav from "../components/Header/Nav";
import NavBrand from "../components/Header/NavBrand";
import NavItem from "../components/Header/NavItem";
import NavLink from "../components/Header/NavLink";
import NavBurger from "../components/Header/NavBurger";
import NavAvatar from "../components/Header/NavAvatar";

const Header = () => {
  const [burger, setBurger] = useState(true);
  const [avatar, setAvatar] = useState(true);

  const onBurgerHandeler = () => {
    setBurger(!burger);
  };

  const onAvatarHandeler = () => {
    setAvatar(!avatar);
  };

  const burgerHidden = burger
    ? "transition ease-out duration-100 transform hidden scale-95"
    : "transition ease-out duration-100 transform  scale-100";
  const avatarHidden = avatar
    ? "transition ease-out duration-100 transform hidden scale-95"
    : "transition ease-out duration-100 transform  scale-100";

  return (
    <header className="md:px-10 px-4 py-4 border-b shadow-md sticky top-0 bg-gray-100 z-50">
      <Nav>
        <NavItem className="md:hidden">
          <NavBurger onClick={onBurgerHandeler} hidden={burgerHidden} />
        </NavItem>

        <NavItem className="flex items-center">
          <NavBrand />
          <div className="text-lg text-gray-700 hover:bg-gray-100 bg-gray-200 px-2 rounded mr-5 hidden md:block">
            <NavLink
              to="/home"
              text="الصفحة الرئيسية"
              className="block hover:opacity-75"
            />
          </div>
        </NavItem>
        <NavItem>
          <div className="">
            <NavAvatar
              to="/signin"
              className="bg-gray-700 py-1 px-2 text-lg rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:bg-gray-600 text-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105"
              text="تسجيل الدخول"
            />
          </div>

          <div className="hidden">
            <NavAvatar onClick={onAvatarHandeler} />
            <div
              className={`origin-top-right absolute left-20 w-48 rounded-md shadow-lg py-1 bg-gray-100 ring-1 ring-black ring-opacity-5 ${avatarHidden}`}
            >
              <NavLink to="/profile" text="صفحتي الشخصية" />
              <NavLink to="/settings" text="التعديلات" />
              <NavLink to="/" text="تسجيل الخروج" />
            </div>
          </div>
        </NavItem>
      </Nav>
      <Nav className={`mt-6 ${burgerHidden}   md:hidden`}>
        <NavItem className="px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/home"
            text="الصفحة الرئيسية"
            className="bg-gray-200 text-gray-800 block px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-300 cursor-pointer"
          />
        </NavItem>
      </Nav>
    </header>
  );
};

export default Header;
