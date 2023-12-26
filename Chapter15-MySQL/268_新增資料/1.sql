CREATE TABLE employees(
    ID int primary key auto_increment ,
    Name varchar(30),
    age int,
    salary int DEFAULT 1500,
    supervisor int,
    department int
);

describe employees;
-- drop table employees;
insert into employees values(
    1,
    "oni",
    25,
    1000,
    1,
    101
);
select * from employees;

insert into employees (id,name,age,salary,supervisor,department)
values(
    2,"umi",16,10,1,100
);
insert into employees (name,age,supervisor,department)
values(
    "corn",3,2,102
)
