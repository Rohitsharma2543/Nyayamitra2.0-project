const express = require("express");
const cors = require("cors");
const data = require("./db.json");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Dynamic routes like JSON Server
Object.keys(data).forEach((key) => {
  app.get(`/${key}`, (req, res) => {
    res.json(data[key]);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});