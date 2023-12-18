const User = require("../models/userModel");
import bcrypt from "bcrypt-nodejs";

const catchAsync = require("../utils/catchAsync");

const AppError = require("../utils/appError");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const Users = await User.find();
  res.status(200).json({
    status: "200",
    results: Users.length,
    data: { Users },
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;

  if (!name || !email || !password || !passwordConfirm) {
    return next(new AppError("All fields need to be filled !!", 400));
  }

  const existingUser = await User.findOne({
    $or: [{ name }, { email }],
  });

  if (existingUser) {
    return next(new AppError("User already exists !!", 400));
  }

  const salt = bcrypt.genSaltSync(10);
  const user = new User({
    name,
    email,
    password: bcrypt.hashSync(password, salt),
    passwordConfirm: bcrypt.hashSync(passwordConfirm, salt),
  });
  await user.save();

  res.status(201).json({ status: true, name: user.name, accessToken: user.accessToken });
});

exports.loginUser = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const user = await User.findOne({ email: req.body.email });
  if (user?.password && bcrypt.compareSync(req.body.password, user.password)) {
    res.status(200).json({ status: true, name: user.name, accessToken: user.accessToken });
  } else {
    return next(new AppError("No User found", 404));
  }
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const newUser = await User.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    data: null,
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(new AppError("No User found with that ID", 404));
  }

  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});
