const mongoose = require("mongoose");
import { Schema } from "mongoose";

import { flashcardSchema } from "./flashcardModel";
import { categorySchema } from "./categoryModel";

const deckSchema = new Schema({
  title: { type: String, required: true },
  isDone: { type: Boolean, default: false },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: false, enum: {} }, //user can edit
  reviewed_date: { type: [Date], default: undefined },
  last_reviewed_date: { type: Date, required: true, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  cards: { type: [Schema.Types.ObjectId], ref: "flashcard" },
});

const Deck = mongoose.model("deck", deckSchema);

module.exports = Deck;
