const connection = require("./db_connect");

const getUsers = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM Users", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

const addUsers = (username, lot_number, email, password) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO Users (username, lot_number, email, password) VALUES (?, ?, ?, ?);`,
      [username, lot_number, email, password],
      (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      }
    );
  });
};

module.exports = { getUsers, addUsers };
