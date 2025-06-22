const crypto = require("crypto");

//It generate a randam secret key
const secretKey = crypto.randomBytes(32).toString('hex');

module.exports= { secretKey };