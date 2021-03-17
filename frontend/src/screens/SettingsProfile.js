import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMe, updatePassword } from "../actions/AuthActions";

import File from "../components/Auth/File";
import HalfInput from "../components/Auth/HalfInput";
import InputField from "../components/Auth/InputField";
import SaveBtn from "../components/Auth/SaveBtn";
import Alert from "../components/Alert";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  photo: "",
};

const initialStatePwd = {
  password: "",
  confirmPassword: "",
  passwordCurrent: "",
};
const SettingsProfile = () => {
  const [formData, setFormData] = useState(initialState);
  const [formDataPwd, setFormDataPwd] = useState(initialStatePwd);

  const dispatch = useDispatch();
  let { auth, error } = useSelector((state) => state.auth);

  if (!auth) return null;

  const onChangeValue = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onChangeValuePwd = (e) =>
    setFormDataPwd({
      ...formDataPwd,
      [e.target.name]: e.target.value,
    });

  const onFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("email", formData.email);
    form.append("photo", formData.photo);
    dispatch(updateMe(form));
    setFormData(initialState);
  };

  const onFormSubmitPwd = (e) => {
    e.preventDefault();
    dispatch(updatePassword(formDataPwd));
    setFormDataPwd(initialStatePwd);
  };

  return (
    <div className="container mx-auto mt-10">
      {error && <Alert />}
      {auth && <Alert />}
      <div className="sm:w-8/12 w-full mx-auto p-5 bg-gray-100 rounded-mds shadow-md">
        <h1 className="text-center font-kufi text-xl sm:text-2xl text-gray-700">
          تعديل الصفحة الشخصية
        </h1>
        <form
          className="sm:w-1/2 w-full mx-auto mt-5"
          onSubmit={(e) => onFormSubmit(e)}
          encType="multipart/form-data"
        >
          <div className="flex -mx-3">
            <HalfInput
              label="الاسم الأول"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => onChangeValue(e)}
            />
            <HalfInput
              label="اسم العائلة"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => onChangeValue(e)}
            />
          </div>
          <InputField
            label="البريد الإلكتروني"
            svg="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            id="email"
            type="email"
            min="3"
            max="320"
            value={formData.email}
            onChange={(e) => onChangeValue(e)}
          />
          <File
            auth={auth}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.files[0],
              })
            }
          />
          <SaveBtn text="حفظ التعديلات" />
        </form>
      </div>

      <div className="sm:w-8/12 w-full mx-auto p-5 bg-gray-100 rounded-mds shadow-md mt-10">
        <h1 className="text-center font-kufi text-xl sm:text-2xl text-gray-700">
          تغيير كلمة المرور
        </h1>
        <form
          className="sm:w-1/2 w-full mx-auto mt-5"
          onSubmit={(e) => onFormSubmitPwd(e)}
        >
          <InputField
            label="كلمة المرور القديمة"
            svg="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            id="passwordCurrent"
            type="password"
            name="passwordCurrent"
            min="8"
            max="128"
            onChange={(e) => onChangeValuePwd(e)}
          />
          <InputField
            label="كلمة المرور الجديدة"
            svg="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            id="password"
            type="password"
            name="password"
            min="8"
            max="128"
            onChange={(e) => onChangeValuePwd(e)}
          />
          <InputField
            label="تأكيد كلمة المرور"
            svg="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            min="8"
            max="128"
            onChange={(e) => onChangeValuePwd(e)}
          />
          <SaveBtn text="حفظ كلمة المرور" />
        </form>
      </div>
    </div>
  );
};

export default SettingsProfile;
