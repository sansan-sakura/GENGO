const mongoose = require("mongoose");
import { Schema } from "mongoose";
const Category = require("./categoryModel");
const User = require("./userModel");
const AppError = require("../utils/appError");

const deckSchema = new Schema(
  {
    title: { type: String, required: true },
    isDone: { type: Boolean, default: false },
    category: { type: Schema.Types.ObjectId, ref: "Category" }, //user can edit
    reviewed_date: { type: [Date], default: undefined },
    last_reviewed_date: { type: Date, required: true, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    cards: [{ type: Schema.Types.ObjectId, ref: "Flashcard" }],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "deck needs to know the user"],
    },
  },
  { timestamps: true },
  { toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

deckSchema.pre("save", async function (next) {
  if (this.category !== "all") {
    this.category = await Category.findById(this.category);
    if (!this.category) return new AppError("Category doesn't exist", 400);
  }
  this.user = await User.findById(this.user);
  if (!this.user) return new AppError("User doesn't exist", 400);
  next();
});

const Deck = mongoose.model("Deck", deckSchema);

module.exports = Deck;
