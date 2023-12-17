const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.authenticateUser = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ accessToken: req.headers.authorization });
  if (user) {
    req.body.name = user;
    next();
  } else {
    return new AppError("Please log in first", 401);
  }
});