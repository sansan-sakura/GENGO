const express = require("express");

const deckController = require("../controllers/deckController");

const router = express.Router();

router.route("/").get(deckController.getAllDecks).post(deckController.createDeck);

router
  .route("/:id")
  .get(deckController.getDeck)
  .delete(deckController.deleteDeck)
  .put(deckController.updateDeck);

module.exports = router;
