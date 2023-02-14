CREATE DATABASE todo_app;
create table todos(
	id varchar(255)PRIMARY KEY,
	user_email varchar(255),
	title varchar(30),
	progress INT,
	date varchar(300)
);

create table users (
	email varchar(255) PRIMARY KEY,
	hashed_password varchar(255)
);