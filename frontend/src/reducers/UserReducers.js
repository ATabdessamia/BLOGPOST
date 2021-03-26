/* eslint-disable import/no-anonymous-default-export */
import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "../constants/index";

export default (state = { users: null }, action) => {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, loading: true };
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
