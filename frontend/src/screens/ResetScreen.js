import React from "react";

import Modal from "../Modal";
import Reset from "../components/Modal/Reset";

const ResetScreen = () => {
  return (
    <>
      <Modal title="إعادة" form={<Reset />} />
    </>
  );
};

export default ResetScreen;
