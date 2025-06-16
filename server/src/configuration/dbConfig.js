const mongoose = require("mongoose");
require("dotenv").config();

async function main () {
  await mongoose.connect(process.env.Mongo_URL)
}
main()
  .then(() => {
    console.log("db connected")
  }).catch((error) => {
    console.error("some error occured in connecing db :", error)
  })

module.exports = mongoose;