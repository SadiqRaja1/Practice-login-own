const express = require("express");
const singupController = require("../controllers/singupC")

const router = express.Router();

router.post("/register",singupController.createUser);

module.exports = router;