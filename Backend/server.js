const express = require("express");
const cors = require("cors");
const db_Users = require("./DataBase/db_Users");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ******************************

app.get("/Users", (req, res) => {
  db_Users
    .getUsers()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.post("/Users", (req, res) => {
    db_Users
      .addUsers(
        req.body.username,
        req.body.lot_number,
        req.body.email,
        req.body.password
      )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });



app.listen(4688, () => {
  console.log("Сeрвер запущен на 4688");
});

// module.exports = {getUsers}
