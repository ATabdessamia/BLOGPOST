import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { GoogleLogin } from "react-google-login";
import { SUCCESS } from "../../constants/index";
import Alert from "../Alert";

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const googleSuccess = async (res) => {
    const data = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: SUCCESS, payload: { data, token } });

      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => (
    <Alert error="Google Sign In was unsuccessful. Try again later" />
  );

  return (
    <>
      <GoogleLogin
        clientId="474212961872-q618tbke2mpr424ib9d5422ipuk7a02c.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            className="relative mt-6 border rounded-md py-3 text-lg text-gray-50 bg-red-500  hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <span className="absolute left-2 top-1 h-10 w-10">
              <img src="images/google_icon.svg" alt="google_icon" />
            </span>
            <span>تسجيل الدخول على جوجل</span>
          </button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleError}
        cookiePolicy="single_host_origin"
      />
    </>
  );
};

export default GoogleAuth;
