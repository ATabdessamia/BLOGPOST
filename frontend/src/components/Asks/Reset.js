import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import InputField from "./InputField";
import SaveBtn from "./SaveBtn";
import Form from "./Form";
import Loading from "../Loading";
import Alert from "../Alert";
import { resetPwd } from "../../actions/AuthActions";

const initialState = {
  password: "",
  confirmPassword: "",
};

const Reset = ({ title, params }) => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { token } = params;
  const history = useHistory();
  let { loading, error } = useSelector((state) => state.auth);

  const clear = () => {
    setFormData(initialState);
  };

  const onChangeEmail = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(resetPwd(token, formData, history));
    clear();
  };

  return (
    <>
      {loading && <Loading />} {error && <Alert />}
      <Form
        onSubmit={(e) => {
          onSubmitForm(e);
        }}
      >
        <div className="bg-gray-900">
          <h1 className="text-xl font-semibold text-center underlinee relative py-5">
            {title} تغيير كلمة المرور
          </h1>
        </div>
        <InputField
          label="كلمة المرور"
          id="password"
          type="password"
          min="8"
          max="128"
          value={formData.password}
          onChange={(e) => {
            onChangeEmail(e);
          }}
        />
        <InputField
          label="تأكيد كلمة المرور"
          id="confirmPassword"
          type="password"
          min="8"
          max="128"
          value={formData.confirmPassword}
          onChange={(e) => {
            onChangeEmail(e);
          }}
        />
        <SaveBtn />
      </Form>
    </>
  );
};

export default Reset;
