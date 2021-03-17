import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import PostReducers from "./PostReducers";

export default combineReducers({
  auth: AuthReducers,
  posts: PostReducers,
});
