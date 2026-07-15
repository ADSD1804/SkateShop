const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/skateshop_crud")
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log("Error connecting to MongoDB!:", err));
