SELECT c.CustomerName, SUM(o.TotalAmount) AS TotalAmountSpent
FROM Customers c
LEFT JOIN Orders o
ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerName;
