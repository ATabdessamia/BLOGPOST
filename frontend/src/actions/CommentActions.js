import * as api from "../api/CommentApi";
import { COMMENT, COMMENTS } from "../constants/index";

export const createComment = (id, comment) => async (dispatch) => {
  try {
    const { data } = await api.createComment(id, comment);

    dispatch({ type: COMMENT, payload: data });
  } catch (error) {
    console.log(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const fetchComments = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchComments(id);

    dispatch({ type: COMMENTS, payload: data });
  } catch (error) {
    console.log(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};
