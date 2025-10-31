CREATE TABLE Products (
    ProductID INT,
    ProductName VARCHAR(100)
);

CREATE TABLE OrderItems (
    OrderItemID INT,
    OrderID INT,
    ProductID INT,
    Quantity INT
);

SELECT p.ProductName, SUM(o.Quantity) AS TotalQuantitySold
FROM Products p
LEFT JOIN OrderItems o
ON p.ProductID = o.ProductID
GROUP BY ProductName;