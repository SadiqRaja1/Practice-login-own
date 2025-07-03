const express = require("express");
const router = express.Router();
const authMiddleware = require("../utils/authMiddleware")

router.get("/users", authMiddleware.authenticationToken);

module.exports = router;