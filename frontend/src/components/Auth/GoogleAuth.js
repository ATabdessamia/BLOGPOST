import React from "react";

import { GoogleLogin } from "react-google-login";
const GoogleAuth = () => {
  return (
    <>
      <GoogleLogin
        buttonText="Login"
        render={(renderProps) => (
          <button className="relative mt-6 border rounded-md py-3 text-lg text-gray-50 bg-red-500  hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <span className="absolute left-2 top-1 h-10 w-10">
              <img src="images/google_icon.svg" alt="google_icon" />
            </span>
            <span>تسجيل الدخول على جوجل</span>
          </button>
        )}
      />
    </>
  );
};

export default GoogleAuth;
