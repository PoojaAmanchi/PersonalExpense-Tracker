const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const Router = require("./routers");

dotenv.config();
const app = express();
const dbURI = process.env.DATABASE;
const port = process.env.PORT || 5000;

// Check if DATABASE environment variable is set
if (!dbURI) {
  console.error("DATABASE environment variable is missing.");
  process.exit(1);
}
// MongoDB connection options
mongoose.set('strictQuery', false);  // Prevent deprecation warning for strictQuery

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(Router);

console.log("Database URI:", dbURI); // Debugging line

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log("Connected to MongoDB");
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });}
