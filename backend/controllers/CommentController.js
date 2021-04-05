import Comment from "../models/CommentModel.js";
import catchAsync from "../utilits/CatchAsync.js";

export const createNewComment = catchAsync(async (req, res, next) => {
  const doc = await Comment.create({
    comment: req.body.comment,
    user: req.user.id,
    post: req.params.id,
  });

  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

export const getAllComments = catchAsync(async (req, res, next) => {
  const doc = await Comment.find({
    post: req.params.id,
  });

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

export const ratePost = catchAsync(async (req, res, next) => {
  const comment = await Comment.find({
    post: req.params.id,
    user: req.user.id,
  });

  const doc = await Comment.findByIdAndUpdate(comment[0]._id, {
    rating: req.body.rating,
  });

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});
