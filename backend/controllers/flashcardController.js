const Flashcard = require("../models/flashcardModel");

const catchAsync = require("../utils/catchAsync");

const AppError = require("../utils/appError");

exports.getAllFlashcards = catchAsync(async (req, res, next) => {
  const flashcards = await Flashcard.find();

  res.status(200).json({
    status: "200",
    results: flashcards.length,
    data: { flashcards },
  });
});

exports.createFlashcard = catchAsync(async (req, res, next) => {
  const newFlashcard = await Flashcard.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      newFlashcard,
    },
  });
});

exports.getFlashcard = catchAsync(async (req, res, next) => {
  const Flashcard = await Flashcard.findById(req.params.id);
  res.status(201).json({
    status: "success",
    data: {
      Flashcard,
    },
  });
});

exports.deleteFlashcard = catchAsync(async (req, res, next) => {
  const newFlashcard = await Flashcard.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    data: null,
  });
});

exports.updateFlashcard = catchAsync(async (req, res, next) => {
  const flashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!flashcard) {
    return next(new AppError("No Flashcard found with that ID", 404));
  }

  res.status(201).json({
    status: "success",
    data: {
      flashcard,
    },
  });
});
