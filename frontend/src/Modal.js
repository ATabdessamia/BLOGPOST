import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ title, form }) => {
  return ReactDOM.createPortal(
    <div className="absolute top-0 left-0 w-full min-h-full z-50 text-gray-200 bgScreen">
      <div className="relative bg-gray-900 min-h-full w-full sm:w-1/2 top-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 rounded-md shadow-2xl opacity-70">
        <div className="bg-gray-900">
          <h1 className="text-xl font-semibold text-center underlinee relative py-5">
            {title} تغيير كلمة المرور
          </h1>
        </div>
        {form}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
