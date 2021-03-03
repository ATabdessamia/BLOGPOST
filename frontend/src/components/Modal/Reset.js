import React from "react";

import InputField from "./InputField";
import SaveBtn from "./SaveBtn";

const Reset = () => {
  return (
    <form className="w-1/2 mx-auto mt-5">
      <InputField
        label="كلمة المرور"
        id="password"
        type="password"
        min="20"
        max="128"
      />
      <InputField
        label="تأكيد كلمة المرور"
        id="confirmPassword"
        type="password"
        min="20"
        max="128"
      />
      <SaveBtn />
    </form>
  );
};

export default Reset;
