const mongoose = require("mongoose");

export const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: [20, "A sategory must be less than 20 charactors 🫣"],
    minlength: [3, "A category must be more than 3 charactors ⭐️"],
  },
});

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
