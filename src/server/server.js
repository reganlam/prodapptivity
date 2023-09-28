const express = require("express");
const app = express();
const port = process.env.PORT;
const authRouter = require("./routes/auth");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/user", authRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Run task
const logActiveWindow = require("./task");
setInterval(logActiveWindow, 30000);
