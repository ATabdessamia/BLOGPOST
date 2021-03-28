import React, { useState } from "react";
import { useDispatch } from "react-redux";

const initialState = {
  comment: "",
};

const CommentForm = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const clear = () => {
    setFormData(initialState);
  };
  const onChangeValue = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFormSubmit = (e) => {
    e.preventDefault();
    clear();
  };
  return (
    <form className="mb-8 mt-2 -mr-2" onSubmit={(e) => onFormSubmit(e)}>
      <textarea
        name="comment"
        value={formData.comment}
        onChange={(e) => onChangeValue(e)}
        placeholder="علق هنا..."
        className="border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 p-2 text-base text-gray-500 text-justify font-black  bg-gray-100"
        required
      ></textarea>
      <button className="hover:opacity-90 text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105 bg-gray-700 py-1 px-10 rounded-md float-left">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </form>
  );
};

export default CommentForm;
