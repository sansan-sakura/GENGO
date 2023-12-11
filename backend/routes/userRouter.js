const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.route("/").get(userController.getAllUsers).post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .put(userController.updateUser);

module.exports = router;
