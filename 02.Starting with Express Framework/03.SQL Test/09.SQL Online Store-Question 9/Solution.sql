CREATE TABLE Customers (
    CustomerID INT,
    CustomerName VARCHAR(100),
    Address VARCHAR(200)
);

SELECT c1.CustomerName AS Customer1, c2.CustomerName AS Customer2, c1.Address
FROM Customers c1
JOIN CustomerS c2
ON c1.Address = c2.Address
AND c1.CustomerID < c2.CustomerID;