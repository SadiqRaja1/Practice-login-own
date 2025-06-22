const authService = require("../services/loginS")

async function login(req, res) {
    try{
        const {email, password} = req.body;
        const token = await authService.login(email, password);
        res.status(200).json({token});
    }catch(error) {
        res.status(401).json({message : "Invalid credentials"})
    }
}

module.exports = {login};