const express = require("express");
const authentificateUser = require("../middleware/auth");
const categoryController = require("../controllers/categoryController");

const router = express.Router();

router
  .route("/")
  .get(authentificateUser, categoryController.getCategories)
  .post(authentificateUser, categoryController.createCategory);
router
  .route("/:id")
  .get(categoryController.getCategory)
  .delete(categoryController.deleteCategory)
  .put(categoryController.updateCategory);

module.exports = router;
