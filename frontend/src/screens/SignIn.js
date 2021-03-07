import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import AuthBtn from "../components/Auth/AuthBtn";
import GoogleAuth from "../components/Auth/GoogleAuth";
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
      {error && <Alert err={auth} />}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col bg-gray-100 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-medium self-center text-xl sm:text-2xl text-gray-700 font-kufi">
            تسجيل الدخول إلى حسابك
          </div>
          <GoogleAuth />

          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500">
                أو الدخول على البريد الإلكتروني
              </span>
            </div>
          </div>
          <div className="mt-10">
            <form onSubmit={(e) => onFormSubmit(e)}>
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
