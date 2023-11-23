const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema({
  title: { type: string },
});
