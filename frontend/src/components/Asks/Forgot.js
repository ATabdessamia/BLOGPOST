import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPwd } from "../../actions/AuthActions";

import Alert from "../Alert";
import Loading from "../Loading";
import Form from "./Form";
import InputField from "./InputField";
import SaveBtn from "./SaveBtn";

const Forgot = ({ title }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  let { loading, error, auth, success } = useSelector((state) => state.auth);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(forgotPwd(email));
    setEmail("");
  };

  return (
    <>
      {loading && <Loading />}
      {error && <Alert err={auth} color="red" />}
      {success && <Alert err={auth.message} color="green" />}
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
          label="البريد الإلكتروني"
          id="email"
          type="email"
          min="3"
          max="320"
          value={email}
          onChange={(e) => {
            onChangeEmail(e);
          }}
        />
        <SaveBtn />
      </Form>
    </>
  );
};

export default Forgot;
