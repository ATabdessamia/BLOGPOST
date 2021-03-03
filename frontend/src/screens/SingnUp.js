import React from "react";
import { Link } from "react-router-dom";

import AuthBtn from "../components/Auth/AuthBtn";
import HalfInput from "../components/Auth/HalfInput";
import InputField from "../components/Auth/InputField";

const SingnUp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col bg-gray-100 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl text-gray-700 font-kufi">
          إنشاء حساب جديد
        </div>
        <div className="mt-10">
          <Link to="/home" className="text-blue-900 hover:text-opacity-70">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
          <form className="mt-5">
            <div className="flex -mx-3">
              <HalfInput label="الاسم الأول" id="firstName" />
              <HalfInput label="اسم العائلة" id="lastName" />
            </div>
            <InputField
              label="البريد الإلكتروني"
              svg="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              id="email"
              type="email"
              min="3"
              max="320"
            />
            <InputField
              label="كلمة المرور"
              svg="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              id="password"
              type="password"
              min="20"
              max="128"
            />
            <InputField
              label="تأكيد كلمة المرور"
              svg="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              id="confirmPassword"
              type="password"
              min="20"
              max="128"
            />

            <AuthBtn />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingnUp;
