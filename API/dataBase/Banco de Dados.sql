CREATE DATABASE api_crc_direito;
USE api_crc_direito;

CREATE TABLE users (
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `email` VARCHAR(200),
    `password` VARCHAR(200),
    `passwordResetToken` VARCHAR(200) DEFAULT null,
    `passwordResetExpires` VARCHAR(50) DEFAULT null,
    UNIQUE KEY `email` (email)
);

DROP TABLE users;
SELECT * FROM users ORDER BY id desc;

INSERT INTO users (email, password) 
	VALUES ("diegocholi@gmail.com", "1234456");

UPDATE users SET users.email = "diegocholi@gmail.com" WHERE users.passwordResetToken = "cedaa1202d9e8ffbd60a0c7f0b37589eedfcd04b";  