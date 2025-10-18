CREATE TABLE Guests (
    GuestID INT PRIMARY KEY,
    Name VARCHAR(50),
    Contact VARCHAR(50)
);


SELECT 
g1.Name AS Guest1Name,
g2.Name AS Guest2Name,
g1.Contact
FROM Guests g1
JOIN Guests g2
ON g1.Contact = g2.Contact
AND g1.GuestID < g2.GuestID;