const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "root",
  database: "VillageDawn",
});

connection.connect((error) => {
  if (error) {
    console.log("Ошибка подключения к БД ", error);
    return;
  }
  console.log("БД Подключена....");
});

module.exports = connection;
