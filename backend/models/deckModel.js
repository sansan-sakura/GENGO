const mongoose = require("mongoose");

const { flashcardSchema } = require("./flashcardModel");

const deckSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isDone: { type: Boolean, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true, enum: {} }, //user can edit
  reviewed_date: { type: [Date], default: undefined },
  last_reviewed_date: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  cards: { type: [Schema.Types.ObjectId], ref: "flashcard" },
});

const Deck = mongoose.model("deck", deckSchema);

exports.module = Deck;
