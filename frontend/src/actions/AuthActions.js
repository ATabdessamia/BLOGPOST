import * as api from "../api/AuthApi";
import { ERROR, LOADING, SUCCESS } from "../constants/index";

export const signup = (formData, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.signUp(formData);

    dispatch({ type: SUCCESS, payload: data });
    history.push("/signin");
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

export const signin = (formData, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.signIn(formData);

    dispatch({ type: SUCCESS, payload: data });
    history.push("/home");
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

export const logout = (history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.logOut();

    dispatch({ type: SUCCESS, payload: data });
    history.push("/");
  } catch (error) {
    dispatch({ type: ERROR, payload: "Somthing goes wrong, Try again!" });
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
