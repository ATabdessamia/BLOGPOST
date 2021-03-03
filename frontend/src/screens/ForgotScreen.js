import React from "react";

import Modal from "../Modal";
import Forgot from "../components/Modal/Forgot";

const ForgotScreen = () => {
  return (
    <>
      <Modal title="طلب" form={<Forgot />} />
    </>
  );
};

export default ForgotScreen;
