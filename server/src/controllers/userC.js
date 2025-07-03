const userService = require("../services/userS")

async function getUsers(req, res) {
    try {
        const Users = await userService.getUsers();
        res.status(200).json({Users})
    }catch(error) {
        res.status(500).json({message : error})
    }
}

module.exports = { getUsers };