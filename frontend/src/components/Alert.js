import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SUCCESS } from "../constants";

const Alert = ({ err, color }) => {
  const [translate, setTranslate] = useState(true);
  const dispatch = useDispatch();
  const trans = translate ? "translate-y-0" : "-translate-y-full hidden";

  useEffect(() => {
    err && setTranslate(true);
    const timeout = setTimeout(() => {
      setTranslate(false);
      dispatch({ type: SUCCESS });
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [err, dispatch]);
  return (
    <div
      className={`bg-${color}-500 p-5 w-3/4 sm:w-1/3 mx-auto text-lg text-gray-50 font-medium text-center shadow-2xl transform ${trans} transition ease-in-out duration-1000`}
    >
      <p>{err}</p>
    </div>
  );
};

export default Alert;
