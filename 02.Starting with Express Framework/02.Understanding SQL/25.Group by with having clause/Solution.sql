CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary INT
);


SELECT department, SUM(salary) FROM employees GROUP BY department HAVING SUM(salary) > 120000;