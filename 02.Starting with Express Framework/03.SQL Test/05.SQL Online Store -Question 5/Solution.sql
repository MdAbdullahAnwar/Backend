CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    OrderStatus VARCHAR(20)
);

SELECT * FROM Orders WHERE OrderDate >= '2024-01-01' AND OrderStatus = 'Completed';
