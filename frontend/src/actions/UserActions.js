import * as api from "../api/AuthApi";
import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "../constants/index";

export const getuser = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING });
    const { data } = await api.getUser(id);

    dispatch({ type: USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
