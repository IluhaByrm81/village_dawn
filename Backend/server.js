const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ******************************

app.listen(4688, () => {
  console.log("Сурвер запущен на 4688");
});
