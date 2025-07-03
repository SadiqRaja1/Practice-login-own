const jwt = require("jsonwebtoken");
const { scretKey, secretKey } = require("../configuration/jwtConfig");

function authenticationToken(req, res, next) {
    const authHeader = req.header("Authorization");
    if(!authHeader) {
        res.status(401).json({message : "Missing Token"})
    }

    const [bearer, token] = authHeader.split(" ");
    if (bearer !== "Bearer" || !token) {
        res.status(401).json({message : "Invalid token format"})
    }

    jwt.verify(token, secretKey, (err, user) => {
        if(err){
            return res.status(403).json({message : "Some error occure while verifying token"});
        }
        req.user = user;
        next();
    })
    
    
}

module.exports = { authenticationToken }