CREATE DATABASE board;

use board;

CREATE TABLE board (
id INT auto_increment,
displayName VARCHAR(50) NOT NULL, 
username VARCHAR(50) NOT NULL, 
title VARCHAR(50) NOT NULL,
content VARCHAR(255) NOT NULL,
w_date  TIMESTAMP ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
primary key(id)
) DEFAULT CHARSET=utf8;

CREATE TABLE user(
id INT auto_increment NOT NULL,
username VARCHAR(50) NOT NULL, 
displayName VARCHAR(50) NOT NULL, 
password VARCHAR(255) NOT NULL, 
email VARCHAR(50) NOT NULL, 
tel VARCHAR(40) NOT NULL,
primary key(id)
);