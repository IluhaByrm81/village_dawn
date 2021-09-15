CREATE DATABASE VillageDawn;
USE VillageDawn;

DROP TABLE Users;

CREATE TABLE Users (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `lot_number` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL
);

INSERT INTO Users (username, lot_number, email, password)
VALUES ("Alex", "48","qwert@qa", "12345qwert");

SELECT
  *
FROM
  Users;
