CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(100),
    Price INT,
    Stock INT
);

SELECT * FROM Products WHERE ProductName LIKE '%Wireless%';