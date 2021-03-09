use bookstore ;
create table author (
id int auto_increment,
name varchar(255),
address varchar(255),
date_prepare varchar(255),
date_add varchar(255),
name_update varchar(255),
primary key(id)
);

create table book (
id int auto_increment,
title varchar(255),
ISBN varchar(255),
author_id int,
price int,
primary key(id),
CONSTRAINT FK_AuthorBook FOREIGN KEY (author_id) REFERENCES author(id)

);

ALTER TABLE book
ADD publisher_id int;

create table publisher(
id int auto_increment,
name varchar(255),
address varchar(255),
phone varchar(20),
primary key(id)
);

ALTER TABLE book
ADD CONSTRAINT FK_PublisherBook
FOREIGN KEY (publisher_id) REFERENCES publisher(id);

CREATE TABLE `bookstore`.`account` (
  `idaccount` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NULL,
  `password` VARCHAR(100) NULL,
  PRIMARY KEY (`idaccount`));
  ALTER TABLE `bookstore`.`account` 
ADD COLUMN `role` VARCHAR(10) NULL AFTER `password`;
