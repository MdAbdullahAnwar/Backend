-- Create Guests Table
CREATE TABLE Guests (
    GuestID INT PRIMARY KEY,
    Name VARCHAR(50),
    Contact VARCHAR(50)
);

-- Create Rooms Table
CREATE TABLE Rooms (
    RoomID INT PRIMARY KEY,
    RoomType VARCHAR(50),
    Price INT
);

-- Create Reservations Table
CREATE TABLE Reservations (
    ReservationID INT PRIMARY KEY,
    GuestID INT,
    RoomID INT,
    ReservationDate DATE
);


SELECT Guests.Name AS GuestName, Rooms.RoomType
FROM Guests
LEFT JOIN Reservations
ON Guests.GuestID = Reservations.GuestID
LEFT JOIN Rooms
ON Reservations.RoomID = Rooms.RoomID;
