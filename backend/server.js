const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});