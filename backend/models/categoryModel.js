const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category: { type: String },
});

const Category = mongoose.model("category", categorySchema);

exports.module = Category;
