import * as api from "../api/PostApi";
import {
  FETCH_POSTS,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_POST,
} from "../constants/index";

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};