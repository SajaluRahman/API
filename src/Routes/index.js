require("dotenv").config(); // Load .env first
const express = require("express");
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
