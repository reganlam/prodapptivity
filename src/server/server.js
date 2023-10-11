import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import database from "./db/database.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(json());
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
import logActiveWindow from "./task.js";
setInterval(logActiveWindow, 1000);

// Database
database();
