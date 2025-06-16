const singupServices = require("../services/singupS")

const createUser = async (req, res) => {
    try{
    const userData = req.body;
    const user = await singupServices.createUser(userData);
    res.status(200).json({user :user, message:"user created successfully"});
    }catch(error){
        console.error("Something went wrong", error);
    }
}

module.exports = { createUser };