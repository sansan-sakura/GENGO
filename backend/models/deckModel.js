const mongoose = require("mongoose");
import { Schema } from "mongoose";
const Category = require("./categoryModel");

const deckSchema = new Schema({
  title: { type: String, required: true },
  isDone: { type: Boolean, default: false },
  category: { type: Schema.Types.ObjectId, ref: "Category" }, //user can edit
  reviewed_date: { type: [Date], default: undefined },
  last_reviewed_date: { type: Date, required: true, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  cards: { type: [Schema.Types.ObjectId], ref: "Flashcard" },
});

deckSchema.pre("save", async function (next) {
  this.category = await Category.findById(this.category);
  const cardsPromise = this.cards.map(async (id) => await findById(id));
  this.cards = cardsPromise;
  next();
});

const Deck = mongoose.model("Deck", deckSchema);

module.exports = Deck;
