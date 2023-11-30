const express = require("express");

const deckController = require("../controllers/deckController");

const router = express.Router();

router.route("/").get(deckController.getAllDecks).post(deckController.createDeck);
router.route("/date/category/:id").get(deckController.getAllDatesOfDeck);
router.route("/category/:id").get(deckController.getDecksByCategory);

router
  .route("/:id")
  .get(deckController.getDeck)
  .delete(deckController.deleteDeck)
  .put(deckController.updateDeck);

module.exports = router;
