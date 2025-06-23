const User = require("../models/user")
const bcrypt = require("bcrypt");

async function isAdminPresent() {
    try{
        const admin = await User.findOne({name : "admin", role : "admin"});
        if (admin){
            console.log("admin already there in the database");
        }else {
            const createNewAdmin = new User({
                name : "admin",
                email: "admin@gmail.com",
                password:await bcrypt.hash("admin", 10),
                role: "admin"
        })
            const newAdmin = createNewAdmin.save();
            console.log("New admin create", newAdmin);
        }
    }catch(error){
        console.error("Some error occured", error)
    }
}

module.exports = { isAdminPresent };