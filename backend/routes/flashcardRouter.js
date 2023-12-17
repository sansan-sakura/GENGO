const express = require("express");

const flashcardController = require("../controllers/flashcardController");
const authentificateUser = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .get(authentificateUser, flashcardController.getAllFlashcards)
  .post(authentificateUser, flashcardController.createFlashcard);

router
  .route("/:id")
  .get(flashcardController.getFlashcard)
  .delete(flashcardController.deleteFlashcard)
  .put(flashcardController.updateFlashcard);

module.exports = router;
