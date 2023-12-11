import express from "express";
import cors from "cors";
const Category = require("./models/categoryModel");

const listEndpoints = require("express-list-endpoints");

const app = express();

app.use(cors());

app.use(express.json());

const flashcardRouter = require("./routes/flashcardRouter");
const categoryRouter = require("./routes/categoryRouter");
const deckRouter = require("./routes/deckRouter");
const userRouter = require("./routes/userRouter");

app.use("/api/v1/deck", deckRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/flashcard", flashcardRouter);
app.use("/api/v1/user", userRouter);
app.use("/", (req, res) => {
  res.json(listEndpoints(app));
});

app.all("*", (req, res, next) => {
  res.status(500).json({ status: "fail", message: "Something went very wrong 💥 " });
  next();
});

module.exports = app;
