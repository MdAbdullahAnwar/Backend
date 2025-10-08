CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100),
    salary INT
);


SELECT department, SUM(salary) FROM employees GROUP BY department;