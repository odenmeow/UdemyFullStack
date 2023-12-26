create table department (
    id int primary key auto_increment,
    name varchar(30) ,
    address varchar(50),
    headid int not null
);

-- 語法要稍微記一下
insert into department
values
    (1,"North Cement Ltd.","NY No.11",101),
    (2,"South Cement Ltd.","CA No.15",102)
;

select * from department;

-- Join
-- CREATE TABLE employees(
--     ID int primary key auto_increment ,
--     Name varchar(30),
--     age int,
--     salary int DEFAULT 1500,
--     supervisor int,
--     department int
-- );
-- create table department (
--     id int primary key auto_increment,
--     name varchar(30) ,
--     address varchar(50),
--     headid int not null
-- );
-- join
select * from employees as e
join department as d
on  d.headid=e.id;
