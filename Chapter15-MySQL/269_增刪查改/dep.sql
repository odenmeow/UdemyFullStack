CREATE TABLE employees(
    ID int primary key auto_increment ,
    Name varchar(30),
    age int,
    salary int DEFAULT 1500,
    supervisor int,
    department int
);

describe employees;


TRUNCATE employees;
select * from employees;


INSERT INTO employees VALUES(100, "Josh Donaldson", 35, 3500, null, 1);
INSERT INTO employees(id, name,age, salary, supervisor, department)
VALUES(101,"Mike Napoli", 40, 2400, 100, 1);
INSERT INTO employees VALUES(102, "Cody Allen", 37, 2400, 100, 2);
INSERT INTO employees VALUES(103, "Nolan Ryan", 34, 1500, 101, 1);
INSERT INTO employees VALUES(104, "Jason Heyward", 33, 1500, 102, 2);
INSERT INTO employees VALUES(105, "Fred Johnson", 30, 1500, 101, 1);
INSERT INTO employees VALUES(106, "Zach Britton", 29, 1500, 101, 1);
INSERT INTO employees VALUES(108, "Oliver Perez", 30, 1500, 102, 2);

update employees
set id=107
where id=108;

-- 薪水太少的就會被增加
update employees
set salary = 1800
where salary<1800;
-- where 一定要寫，否則無條件大家變成1800⚠️

-- 刪除資料
delete from employees
where id=107;
select * from employees;
-- 如果沒有使用where 會刪除所有資料徒留表格

-- 查詢資料
select id,age,name from employees;


-- 查詢、配合Order by
select * from employees
order by age;

-- 查詢、配合where
select * from employees
where department =1
order by age desc ;


-- 查詢 
select * from employees
where department =1 and salary>2000;