import catchAsync from "../utilits/CatchAsync.js";
import AppError from "../utilits/AppErrors.js";
import APIFeatures from "../utilits/ApiFeatures.js";

export const deleteHand = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndRemove(req.params.id);

    if (!doc) {
      // return for do not give us double response
      return next(new AppError("لم يتم العثور على معرف", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

export const updateHand = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!doc) {
      // return for do not give us double response
      return next(new AppError("لم يتم العثور على معرف", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

export const createHand = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

export const getAllHand = (Model) =>
  catchAsync(async (req, res, next) => {
    //exec query
    const features = new APIFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .paginate();
    const count = await Model.countDocuments();
    const doc = await features.query;
    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
      pages: Math.ceil(count / features.query.options.limit),
    });
  });

export const getHand = (Model) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    const doc = await query;

    if (!doc) {
      // return for do not give us double response
      return next(new AppError("لم يتم العثور على معرف", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });
