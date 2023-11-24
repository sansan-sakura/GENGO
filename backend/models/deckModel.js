const mongoose = require("mongoose");
import { Schema } from "mongoose";

const deckSchema = new Schema({
  title: { type: String, required: true },
  isDone: { type: Boolean, default: false },
  category: { type: Schema.Types.ObjectId, ref: "Category" }, //user can edit
  reviewed_date: { type: [Date], default: undefined },
  last_reviewed_date: { type: Date, required: true, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  cards: { type: [Schema.Types.ObjectId], ref: "Flashcard" },
});

const Deck = mongoose.model("Deck", deckSchema);

module.exports = Deck;
