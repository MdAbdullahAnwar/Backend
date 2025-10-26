CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    Department VARCHAR(50),
    HireDate DATE
);

CREATE TABLE Sales (
    SaleID INT PRIMARY KEY,
    EmployeeID INT,
    SaleDate DATE,
    SaleAmount INT
);

SELECT 
    e.EmployeeName,
    SUM(s.SaleAmount) AS TotalSales
FROM Employees e
JOIN Sales s
ON e.EmployeeID = s.EmployeeID
GROUP BY e.EmployeeName
HAVING SUM(s.SaleAmount) > 50000;
