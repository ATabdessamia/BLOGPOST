import { FETCH_USER, FORGOT, UPDATE_PWD, FETCH_ME } from "../constants/index";
import * as api from "../api/index.js";

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUser(id);

    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const forgotPwd = () => async (dispatch) => {
  try {
    const { data } = await api.forgotPassword();

    dispatch({ type: FORGOT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePwd = () => async (dispatch) => {
  try {
    const { data } = await api.updatePassword();

    dispatch({ type: UPDATE_PWD, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = () => async (dispatch) => {
  try {
    const { data } = await api.updateMe();

    dispatch({ type: UPDATE_PWD, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getMe = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchMe(id);

    dispatch({ type: FETCH_ME, payload: data });
  } catch (error) {
    console.log(error);
  }
};
