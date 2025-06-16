const User = require("../models/user");
const bcrypt = require("bcrypt");

const createUser = async (userData) => {
    try{
        const {name , email, password} = userData;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User ({
            name,
            email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();
        return(savedUser)
    }catch(error){
        console.log("Something went wrong", error)
    }
}
module.exports = { createUser }