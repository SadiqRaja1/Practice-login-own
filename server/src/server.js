const express = require("express");
const cors = require("cors")
require("dotenv").config();
const singupRouter = require("./routes/singupR")
const loginRouter = require("./routes/loginR")
const checkAdmin = require("./scripts/admin")
const userRouter = require("./routes/userR")

const allowedURLs = {
  origin:[process.env.Frontend_URL]
}

const app = express();
app.use(cors(allowedURLs));
app.use(express.json());

checkAdmin.isAdminPresent();

app.use("/user", singupRouter)
app.use("/auth", loginRouter)
app.use("/api", userRouter)

app.get("/", (req, res) => {
  res.send("connected to the root path");
})
app.listen(8080, ()=>{
  console.log(`Server is running at port 8080`);
})