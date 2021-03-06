/* eslint-disable import/no-anonymous-default-export */
import { ERROR, LOADING, SUCCESS } from "../constants/index";

export default (state = { auth: null }, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, success: false, error: false, loading: true };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        auth: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        auth: action.payload,
      };
    default:
      return state;
  }
};
