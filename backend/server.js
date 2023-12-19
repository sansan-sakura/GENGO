const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
dotenv.config();

const mongoUrl = process.env.MONGO_URL;

mongoose.set("strictQuery", false);
mongoose.connect(mongoUrl).then((con) => console.log(`Mongo DB Connected: ${con.connection.host}`));

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
