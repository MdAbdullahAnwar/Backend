CREATE TABLE Guests (
    GuestID INT PRIMARY KEY,
    Name VARCHAR(50),
    Contact VARCHAR(50)
);

CREATE TABLE Reservations (
    ReservationID INT PRIMARY KEY,
    GuestID INT,
    RoomID INT,
    ReservationDate DATE
);


SELECT Name AS GuestName, RoomID AS ReservedRoom FROM Guests INNER JOIN Reservations ON Guests.GuestID = Reservations.GuestID;