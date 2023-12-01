const mongoose = require("mongoose");
const Deck = require("./deckModel");

export const flashcardSchema = new mongoose.Schema(
  {
    deck: { type: mongoose.Schema.Types.ObjectId, ref: "Deck" },
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
  },
  {
    timestamps: true,
  }
);

flashcardSchema.pre("save", async function (next) {
  await Deck.findByIdAndUpdate(this.deck, { $push: { cards: this } });
  next();
});

const Flashcard = mongoose.model("Flashcard", flashcardSchema);

module.exports = Flashcard;
