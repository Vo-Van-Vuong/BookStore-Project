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



select * from author;
select * from book;
select * from book where price < 500 
order by id
