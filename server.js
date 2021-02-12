const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const app = express();

//app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, "public/stats.html"));
});

app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, "public/exercise.html"));
});

app.use(require("./routes/api.js"));

app.listen(process.env.PORT || 3000, () => {
  console.log('server has been started on port 3000');
})
