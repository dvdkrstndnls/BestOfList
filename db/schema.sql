CREATE DATABASE bestoflist_db;
USE bestoflist_db;

CREATE TABLE list
(
	id int NOT NULL AUTO_INCREMENT,
	song varchar(255) NOT NULL,
	liked BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
