const jwt = require("jsonwebtoken");
const { scretKey } = require("../configuration/jwtConfig");

async function authenticationToken(req, res, next) {
    
}

module.exports = { authenticationToken }