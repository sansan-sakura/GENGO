const mongoose = require("mongoose");
const User = require("./userModel");

const stickerSchema = new mongoose.Schema(
  {
    title: String,
    position: { x: { type: String, default: "0" }, y: { type: String, default: "0" } },
    bgColor: String,
    textColor: String,
    size: { width: { type: String, default: "340px" }, height: { type: String, default: "130px" } },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "A Sticker needs to belong to a User"],
    },
  },
  {
    timestamps: true,
  }
);

stickerSchema.pre("save", async function (next) {
  await User.findByIdAndUpdate(this.user, { $push: { sticker: this } });
  next();
});

const Sticker = mongoose.model("Sticker", stickerSchema);

module.exports = Sticker;
