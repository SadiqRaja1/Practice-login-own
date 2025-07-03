const express = require("express");
const router = express.Router();
const authMiddleware = require("../utils/authMiddleware")
const userController = require("../controllers/userC")

router.get("/users", authMiddleware.authenticationToken, userController.getUsers);

module.exports = router;