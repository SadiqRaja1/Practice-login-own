const User = require("../models/user")
const bcrypt = require("bcrypt")
const {generateToken} = require("../utils/jwtUtils")

async function login (email, password) {
    const user = await User.findOne({email:email});
    if(!user) {
        throw error("User not exist check the entered email")
    }
    const verifyPassword = await bcrypt.compare(password, user.password);
    if(!verifyPassword){
        throw error("Incorrect password")
    }
    const token = generateToken(user);
    return token;
}

module.exports = {login}