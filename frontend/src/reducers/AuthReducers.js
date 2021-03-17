/* eslint-disable import/no-anonymous-default-export */
import { ERROR, LOADING, SUCCESS, LOGOUT } from "../constants/index";

export default (state = { auth: null }, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        auth: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      return action.payload;
    default:
      return state;
  }
};
