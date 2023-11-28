const Category = require("../models/categoryModel");

const catchAsync = require("../utils/catchAsync");

const AppError = require("../utils/appError");

exports.getCategories = catchAsync(async (req, res, next) => {
  const categories = await Category.find();

  res.status(200).json({
    status: "200",
    results: categories.length,
    data: { categories },
  });
});

exports.createCategory = catchAsync(async (req, res, next) => {
  const newCategory = await Category.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      newCategory,
    },
  });
});

exports.getCategory = catchAsync(async (req, res, next) => {
  const category = await Category.findOne(req.params);
  res.status(201).json({
    status: "success",
    data: {
      category,
    },
  });
});

exports.deleteCategory = catchAsync(async (req, res, next) => {
  const newCategory = await Category.findOneAndDelete(req.params);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.updateCategory = catchAsync(async (req, res, next) => {
  console.log(req.params, req.body);
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!category) {
    return next(new AppError("No category found with that ID", 404));
  }

  res.status(201).json({
    status: "success",
    data: {
      category,
    },
  });
});
