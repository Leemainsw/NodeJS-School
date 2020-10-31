CREATE DATABASE SHOP;

CREATE TABLE user(
    id INT auto_increment NOT NULL,
    user_id VARCHAR(20) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    user_address VARCHAR(100) NOT NULL,
    user_email VARCHAR(50) NOT NULL, 
    user_tel VARCHAR(14) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE manager(
    id INT auto_increment NOT NULL,
    manager_id VARCHAR(20) NOT NULL,
    manager_password VARCHAR(255) NOT NULL,
    manager_name VARCHAR(30) NOT NULL,
    manager_email VARCHAR(50) NOT NULL,
    manager_tel VARCHAR(14) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE producct(
    id INT auto_increment NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    product_price VARCHAR(20) NOT NULL,
    product_quantity VARCHAR(4) NOT NULL,
    product_image mediumblob NOT NULL,
    PRIMARY KEY(id)
);