CREATE TABLE employees (
    employee_id INT,
    name VARCHAR(100),
    department VARCHAR(50),
    salary INT
);


SELECT name, salary FROM employees WHERE salary BETWEEN 50000 AND 60000;