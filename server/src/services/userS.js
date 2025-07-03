const User = require("../models/user");

async function getUsers() {
    try {
        const Users = await User.find({});
        return Users;
    }catch(error){
        throw new error("Some error occured")
    }
}

module.exports = { getUsers }