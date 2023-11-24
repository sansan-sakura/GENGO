const express = require("express");

const flashcardController = require("../controllers/flashcardController");

const router = express.Router();

router.route("/").get(filmsController.getAllflashcard);

module.exports = router;
