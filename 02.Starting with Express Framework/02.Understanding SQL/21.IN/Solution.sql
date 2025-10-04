CREATE TABLE employees (
    employee_id INT,
    name VARCHAR(100),
    department VARCHAR(50),
    salary INT
);


SELECT name FROM employees WHERE department IN ("IT","Sales");