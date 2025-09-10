Create the Employees table
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(50),
    Salary INT
);

SELECT Name FROM Employees ORDER BY Salary DESC;