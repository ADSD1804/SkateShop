const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/skateshop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error("connection error:", error));
db.once("open", () => console.log("Connected to Database"));

app.listen(3000, () => console.log("Server is running on port 3000"));
