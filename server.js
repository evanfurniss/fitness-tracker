const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workouts";
mongoose.connect(MONGODB_URI,{ useNewUrlParser:true, useCreateIndex: true });

app.use(require("./routes/db.js"))
app.use(require("./routes/html.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});