const express = require("express");

const flashcardController = require("../controllers/flashcardController");

const router = express.Router();

router
  .route("/")
  .get(flashcardController.getAllFlashcards)
  .post(flashcardController.createFlashcard);

router
  .route("/:id")
  .get(flashcardController.getFlashcard)
  .delete(flashcardController.deleteFlashcard)
  .put(flashcardController.updateFlashcard);

module.exports = router;
