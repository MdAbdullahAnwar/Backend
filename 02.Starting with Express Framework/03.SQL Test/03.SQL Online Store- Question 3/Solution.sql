CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    TotalAmount DECIMAL(10, 2)
);

CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(255),
    Email VARCHAR(255)
);


SELECT o.OrderID, c.CustomerName, o.TotalAmount
FROM Orders o
LEFT JOIN Customers c
ON o.CustomerID = c.CustomerID;
