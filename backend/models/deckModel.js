const mongoose = require("mongoose");
import { Schema } from "mongoose";
const Category = require("./categoryModel");

const deckSchema = new Schema(
  {
    title: { type: String, required: true },
    isDone: { type: Boolean, default: false },
    category: { type: Schema.Types.ObjectId, ref: "Category" }, //user can edit
    reviewed_date: { type: [Date], default: undefined },
    last_reviewed_date: { type: Date, required: true, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    cards: [{ type: Schema.Types.ObjectId, ref: "Flashcard" }],
  },
  { timestamps: true },
  { toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

deckSchema.pre("save", async function (next) {
  this.category = await Category.findById(this.category);

  next();
});

deckSchema.virtual("card", {
  ref: "Flashcard", //The Model to use
  localField: "id", //Find in Model, where localField
  foreignField: "deck", // is equal to foreignField
});

const Deck = mongoose.model("Deck", deckSchema);

module.exports = Deck;
