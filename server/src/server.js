const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("connected to the root path");
})
app.listen(8080, ()=>{
  console.log(`Server is running at port 8080`);
})