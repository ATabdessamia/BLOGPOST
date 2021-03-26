import * as api from "../api/AuthApi";
import { ERROR, LOADING, SUCCESS, LOGOUT } from "../constants/index";
import { toast } from "react-toastify";

export const signup = (formData, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.signUp(formData);

    dispatch({ type: SUCCESS, payload: data });
    history.push("/signin");
    toast.success("تم التسجيل بنجاح");
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.signIn(formData);

    dispatch({ type: SUCCESS, payload: data });
    history.push("/home?page=1");
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const logout = (history) => async (dispatch) => {
  try {
    const { data } = await api.logOut();
    dispatch({ type: LOGOUT, payload: data });
    history.push("/");
  } catch (error) {
    dispatch({ type: ERROR, payload: "Somthing goes wrong, Try again!" });
    toast.error("Somthing goes wrong, Try again!");
  }
};

export const getme = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.getMe();

    dispatch({ type: SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const forgotPwd = (email) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.forgotPassword(email);

    dispatch({ type: SUCCESS, payload: data });
    toast.success(data.message);
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const resetPwd = (token, formData, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.resetPassword(token, formData);

    dispatch({ type: SUCCESS, payload: data });
    toast.success(data.message);
    history.push("/signin");
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const updateMe = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const { data } = await api.updateMi(formData);

    dispatch({ type: SUCCESS, payload: data });
    toast.success("تم تغيير المعلومات بنجاح");
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const updatePassword = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const { data } = await api.updatePwd(formData);

    dispatch({ type: SUCCESS, payload: data });
    toast.success("تم تغيير كلمة المرور بنجاح");
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};
