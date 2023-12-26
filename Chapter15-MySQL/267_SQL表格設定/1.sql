CREATE TABLE employees(
    ID int primary key,
    Name varchar(30),
    age int,
    salary int DEFAULT 1500,
    supervisor int,
    department int
);

describe employees;
-- drop table employees;