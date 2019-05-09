const express = require("express");
const mongoose = require('mongoose');
const path = require("path");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Users";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static('public'))

mongoose.connect(MONGODB_URI);

require("./routes/apiRoutes.js")(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});