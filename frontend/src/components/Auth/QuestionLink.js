import React from "react";

const QuestionLink = () => {
  return (
    <div className="flex flex-col items-center mb-6 -mt-4">
      <div className="flex ml-auto">
        <a
          href="#/"
          className="inline-flex text-sm sm:text-base text-blue-500 hover:text-blue-600"
        >
          نسيت كلمة المرور الخاصة بك؟
        </a>
      </div>
      <div className="flex ml-auto">
        <a
          href="#/"
          className="inline-flex text-sm sm:text-base text-blue-500 hover:text-blue-600"
        >
          ليس لديك حساب؟
        </a>
      </div>
    </div>
  );
};

export default QuestionLink;
