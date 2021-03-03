import React from "react";

import InputField from "./InputField";
import SaveBtn from "./SaveBtn";

const Forgot = () => {
  return (
    <form className="w-1/2 mx-auto mt-5">
      <InputField
        label="البريد الإلكتروني"
        id="email"
        type="email"
        min="3"
        max="320"
      />
      <SaveBtn />
    </form>
  );
};

export default Forgot;
