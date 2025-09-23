Create table employees
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    department VARCHAR(50),
    salary INT
);

UPDATE employees SET salary = 75000, department = "Senior Finance" WHERE id = 104;