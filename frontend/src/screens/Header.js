/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Nav from "../components/Header/Nav";
import NavBrand from "../components/Header/NavBrand";
import NavItem from "../components/Header/NavItem";
import NavLink from "../components/Header/NavLink";
import NavBurger from "../components/Header/NavBurger";
import NavAvatar from "../components/Header/NavAvatar";
import { getme, logout } from "../actions/AuthActions";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { auth } = useSelector((state) => state.auth);
  const [burger, setBurger] = useState(true);
  const [avatar, setAvatar] = useState(true);

  useEffect(() => {
    dispatch(getme());
  }, [dispatch]);

  if (!auth) return null;

  const onBurgerHandeler = () => {
    setBurger(!burger);
  };

  const onAvatarHandeler = () => {
    setAvatar(!avatar);
  };

  const burgerHidden = burger
    ? "transition ease-out duration-100 transform hidden opacity-0 scale-95"
    : "transition ease-out duration-100 transform opacity-100 scale-100";
  const avatarHidden = avatar
    ? "transition ease-out duration-100 transform hidden opacity-0 scale-95"
    : "transition ease-out duration-100 transform opacity-100 scale-100";

  return (
    <>
      <header className="md:px-10 px-4 py-4 border-b shadow sticky top-0 bg-gray-100 z-40">
        <Nav>
          <NavItem className="md:hidden">
            <NavBurger onClick={onBurgerHandeler} hidden={burgerHidden} />
          </NavItem>

          <NavItem className="flex items-center">
            <NavBrand />
            <div className="text-lg text-gray-700 hover:bg-gray-100 bg-gray-200 px-2 rounded mr-5 hidden md:block">
              <NavLink
                to="/home?page=1"
                text="الصفحة الرئيسية"
                className="block hover:opacity-75"
              />
            </div>
          </NavItem>
          <NavItem>
            <NavAvatar
              onClick={onAvatarHandeler}
              to={`/profile?page=1&author=${auth.data.data._id}`}
              auth={auth}
            />
            <div
              className={`origin-top-right absolute left-14 w-48 sm:left-20 md:left-24 rounded-md shadow-lg py-1 bg-gray-100 ring-1 z-10 ring-black ring-opacity-5 ${avatarHidden}`}
            >
              <NavLink
                to={`/profile?page=1&author=${auth.data.data._id}`}
                text="صفحتي الشخصية"
              />
              <NavLink to="/settings" text="التعديلات" />
              <NavLink
                to="/"
                text="تسجيل الخروج"
                onClick={() => dispatch(logout(history))}
              />
            </div>
          </NavItem>
        </Nav>
        <Nav className={`mt-6 ${burgerHidden}  md:hidden`}>
          <NavItem className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/home?page=1"
              text="الصفحة الرئيسية"
              className="bg-gray-200 text-gray-800 block px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-300 cursor-pointer"
            />
          </NavItem>
        </Nav>
      </header>
    </>
  );
};

export default Header;
