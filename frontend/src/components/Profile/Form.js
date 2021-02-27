import React from "react";

import TextField from "./TextField";
import File from "./File";
import TextArea from "./TextArea";
import Submit from "./Submit";
const Form = () => {
  return (
    <div className="m-5 sm:w-9/12 w-full mx-auto py-5 border-dashed border-gray-400 border rounded">
      <h3 className="text-2xl text-center">
        <span>إنشاء </span>منشور
      </h3>
      <div className="h-2 w-48 bg-gray-700 mx-auto my-4"></div>
      <form className="sm:w-8/12 w-full mx-auto p-5">
        <TextField />
        <File />
        <TextArea />
        <Submit />
      </form>
    </div>
  );
};

export default Form;
