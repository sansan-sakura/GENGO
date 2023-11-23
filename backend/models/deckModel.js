const mongoose = require("mongoose");

const deckSchema = new mongoose.Schema({
  title: { type: String },
  isDone: { type: Boolean },
  category: { type: String }, //user can edit
  reviewed_date: { type: Array },
  last_reviewed_date: { type: Date },
  created_at: { type: Date, default: new Date() },
  cards: { type: Array },
});

const Deck = mongoose.model("deck", deckSchema);

exports.module = Deck;
