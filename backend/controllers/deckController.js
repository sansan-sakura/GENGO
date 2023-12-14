const Deck = require("../models/deckModel");

const catchAsync = require("../utils/catchAsync");

const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeature");
const { default: mongoose } = require("mongoose");

exports.getAllDecks = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Deck.find().populate("category").populate("cards"), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const deck = await features.query;

  res.status(200).json({
    status: "200",
    results: deck.length,
    data: { deck },
  });
});

exports.getAllDatesOfDeck = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(
    Deck.find({ category: mongoose.Types.ObjectId(req.params.id) })
      .populate("category")
      .populate("cards")
      .select({
        createdAt: 1,
        last_reviewed_date: 1,
        reviewed_date: 1,
      }),
    req.query
  );

  const deck = await features.query;
  console.log(deck, deck.length);
  res.status(200).json({
    status: "200",
    results: deck.length,
    data: { deck },
  });
});

exports.getDecksByCategory = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(
    Deck.find({ category: mongoose.Types.ObjectId(req.params.id) })
      .populate("category")
      .populate("cards"),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const deck = await features.query;

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
  const deck = await Deck.findById(req.params.id).populate("category").populate("cards");
  res.status(201).json({
    status: "success",
    cards: deck.card,
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
