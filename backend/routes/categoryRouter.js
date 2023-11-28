const express = require("express");

const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.route("/").get(categoryController.getCategories).post(categoryController.createCategory);
router
  .route("/:id")
  .get(categoryController.getCategory)
  .delete(categoryController.deleteCategory)
  .put(categoryController.updateCategory);

module.exports = router;
