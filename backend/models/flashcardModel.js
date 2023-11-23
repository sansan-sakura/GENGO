const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema({
  title: { type: String },
  question: { type: String },
  answer: { type: String },
  isDone: { type: Boolean },
  status: { type: String }, //diff/easy/not so hard/ok
});

const Flashcard = mongoose.model("flashcard", flashcardSchema);

exports.module = Flashcard;
