import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = () => {
  return (
    <ToastContainer
      autoClose={2000}
      position="top-center"
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default Alert;
