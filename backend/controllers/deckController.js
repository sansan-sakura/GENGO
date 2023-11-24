const Deck = require("../models/deckModel");

const catchAsync = require("../utils/catchAsync");

const AppError = require("../utils/appError");

exports.getAllDecks = catchAsync(async (req, res, next) => {
  const deck = await Deck.find();

  res.status(200).json({
    status: "200",
    results: deck.length,
    data: { deck },
  });
});

exports.createDeck = catchAsync(async (req, res, next) => {
  const newDeck = await Deck.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      newDeck,
    },
  });
});

exports.getDeck = catchAsync(async (req, res, next) => {
  const deck = await Deck.findById(req.params.id);
  res.status(201).json({
    status: "success",
    data: {
      deck,
    },
  });
});

exports.deleteDeck = catchAsync(async (req, res, next) => {
  const newDeck = await Deck.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    data: null,
  });
});

exports.updateDeck = catchAsync(async (req, res, next) => {
  const deck = await Deck.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!deck) {
    return next(new AppError("No Deck found with that ID", 404));
  }

  res.status(201).json({
    status: "success",
    data: {
      deck,
    },
  });
});
