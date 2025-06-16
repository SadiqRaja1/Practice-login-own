const express = require("express");

const router = express.Router();

router.post("/register",(req, res) => {
    const data = req.body;
    console.log(data);
})

module.exports = router;