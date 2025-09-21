CREATE TABLE Employees (
    emp_id INT,
    emp_name VARCHAR(255),
    department VARCHAR(255),
    salary INT,
    joining_date DATE
);

INSERT INTO Employees (emp_id, emp_name, department, salary, joining_date)
VALUES
(1, 'Alice', 'HR', 45000, '2022-05-15'),
(2, 'Bob', 'IT', 60000, '2021-03-12'),
(3, 'Charlie', 'IT', 75000, '2023-01-20'),
(4, 'Diana', 'HR', 50000, '2020-08-25'),
(5, 'Eve', 'Sales', 65000, '2023-06-10');

SELECT * FROM Employees WHERE department != "HR" AND salary >= 50000;