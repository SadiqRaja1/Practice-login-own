const express = require("express");
const cors = require("cors")
const app = express();
require("dotenv").config();

const allowedURLs = {
  origin:[process.env.Frontend_URL]
}

app.use(cors(allowedURLs));

console.log(process.env.Frontend_URL);

app.get("/", (req, res) => {
  res.send("connected to the root path");
})
app.listen(8080, ()=>{
  console.log(`Server is running at port 8080`);
})