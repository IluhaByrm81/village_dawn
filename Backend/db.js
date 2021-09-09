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
    console.error(error);
    return;
  }
  console.log("БД Подключена....");
});

// module.exports = {};
