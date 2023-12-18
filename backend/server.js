import mongoose from "mongoose";
const dotenv = require("dotenv");
const app = require("./app");
dotenv.config({ path: "./config.env" });

const mongoUrl = "mongodb://localhost:27017/gengo";
// process.env.MONGO_URL.replace("<PASSWORD>", process.env.DATABASE_PASSWORD) ||
// "mongodb://localhost:27017/gengo";
mongoose.set("strictQuery", false);
mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((con) => console.log("connencted"));

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
