import React from "react";
import { useSelector } from "react-redux";

import File from "../components/Auth/File";
import HalfInput from "../components/Auth/HalfInput";
import InputField from "../components/Auth/InputField";
import SaveBtn from "../components/Auth/SaveBtn";

const SettingsProfile = () => {
  let { auth } = useSelector((state) => state.auth);

  if (!auth) return null;

  return (
    <div className="container mx-auto mt-10">
      <div className="sm:w-8/12 w-full mx-auto p-5 bg-gray-100 rounded-mds shadow-md">
        <h1 className="text-center font-kufi text-xl sm:text-2xl text-gray-700">
          تعديل الصفحة الشخصية
        </h1>
        <form className="sm:w-1/2 w-full mx-auto mt-5">
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
          <File auth={auth} />
          <SaveBtn text="حفظ التعديلات" />
        </form>
      </div>

      <div className="sm:w-8/12 w-full mx-auto p-5 bg-gray-100 rounded-mds shadow-md mt-10">
        <h1 className="text-center font-kufi text-xl sm:text-2xl text-gray-700">
          تغيير كلمة المرور
        </h1>
        <form className="sm:w-1/2 w-full mx-auto mt-5">
          <InputField
            label="كلمة المرور القديمة"
            svg="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            id="password"
            type="password"
            name="password"
            min="20"
            max="128"
          />
          <InputField
            label="كلمة المرور الجديدة"
            svg="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            id="password2"
            type="password"
            name="password"
            min="20"
            max="128"
          />
          <InputField
            label="تأكيد كلمة المرور"
            svg="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            min="20"
            max="128"
          />
          <SaveBtn text="حفظ كلمة المرور" />
        </form>
      </div>
    </div>
  );
};

export default SettingsProfile;
