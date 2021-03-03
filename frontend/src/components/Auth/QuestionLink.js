import React from "react";
import { Link } from "react-router-dom";

const QuestionLink = () => {
  return (
    <div className="flex flex-col items-center mb-6 -mt-4">
      <div className="flex ml-auto">
        <Link
          to="/forgotPassword"
          className="inline-flex text-sm sm:text-base text-blue-500 hover:text-blue-600"
        >
          نسيت كلمة المرور الخاصة بك؟
        </Link>
      </div>
      <div className="flex ml-auto">
        <Link
          to="/signup"
          className="inline-flex text-sm sm:text-base text-blue-500 hover:text-blue-600"
        >
          ليس لديك حساب؟
        </Link>
      </div>
    </div>
  );
};

export default QuestionLink;
