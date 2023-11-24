const mongoose = require("mongoose");

exports.flashcardSchema = new mongoose.Schema({
  question: { type: String, trim: true, required: true },
  answer: { type: String, trim: true, required: true },
  isDone: { type: Boolean, required: true, default: false },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["easy", "okay", "hard", "very hard"],
      message: "status is either: easy, okay, hard, very hard",
    },
  },
});

const Flashcard = mongoose.model("flashcard", flashcardSchema);

exports.module = Flashcard;
