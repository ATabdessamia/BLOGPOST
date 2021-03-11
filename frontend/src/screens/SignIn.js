import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import AuthBtn from "../components/Auth/AuthBtn";
import InputField from "../components/Auth/InputField";
import QuestionLink from "../components/Auth/QuestionLink";
import { signin } from "../actions/AuthActions";
import Loading from "../components/Loading";
import Alert from "../components/Alert";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  let { loading, error, auth } = useSelector((state) => state.auth);

  const clear = () => {
    setFormData(initialState);
  };

  const onChangeValue = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData, history));
    clear();
  };

  return (
    <>
      {loading && <Loading />}
      {error && <Alert err={auth} color="red" />}
      <div className="min-h-screen flex flex-row items-center justify-center">
        <div className="hidden sm:block">
          <img
            src="/images/undraw_Login_re_4vu2.svg"
            className="block"
            alt="تسجيل الدخول"
            width="800"
            height="800"
          />
        </div>
        <div className="flex flex-col bg-gray-100 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-medium self-center text-xl sm:text-2xl text-gray-700 font-kufi">
            تسجيل الدخول إلى حسابك
          </div>

          <div className="mt-10">
            <Link to="/home" className="text-blue-900 hover:text-opacity-70">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <form className="mt-5" onSubmit={(e) => onFormSubmit(e)}>
              <InputField
                label="البريد الإلكتروني"
                svg="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                id="email"
                value={formData.email}
                onChange={(e) => onChangeValue(e)}
                type="email"
                name="email"
                min="3"
                max="320"
              />
              <InputField
                label="كلمة المرور"
                svg="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                id="password"
                value={formData.password}
                onChange={(e) => onChangeValue(e)}
                name="password"
                type="password"
                min="8"
                max="128"
              />
              <QuestionLink />
              <AuthBtn />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
