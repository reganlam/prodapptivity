const express = require("express");
const app = express();
const port = 3001; // Use the specified port or default to 3000
const authRouter = require("./routes/auth");

// Middleware to parse JSON request bodies
app.use(express.json());

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
setInterval(logActiveWindow, 10000);
