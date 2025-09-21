CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    department VARCHAR(50),
    salary INT
);


INSERT INTO employees (id, name, age, department, salary) VALUES
(104, "Michael Johnson", 29, "Finance", 65000);