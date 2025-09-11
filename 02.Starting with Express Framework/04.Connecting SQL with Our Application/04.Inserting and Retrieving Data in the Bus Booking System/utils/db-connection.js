const mysql = require('mysql2');

const connection = mysql.createConnection({
    'host':'localhost',
    'user':'root',
    'password': 'Abd@2109',
    'database': 'busbooking'
})

connection.connect((err)=>{
    if(err){
        console.log(err.message);
        return;
    }

    console.log('Connected to the database');

    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE
        )
    `;

    const createBusesTable = `
        CREATE TABLE IF NOT EXISTS Buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(50),
            totalSeats INT,
            availableSeats INT
        )
    `;

    const createBookingsTable = `
        CREATE TABLE IF NOT EXISTS Bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber INT
        )
    `;

    const createPaymentsTable = `
        CREATE TABLE IF NOT EXISTS Payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid DECIMAL(10,2),
            paymentStatus VARCHAR(50)
        )
    `;

    connection.execute(createUsersTable,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("User Table is Created");
    })

    connection.execute(createBusesTable,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("Bus Table is Created");
    })

    connection.execute(createBookingsTable,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("Booking Table is Created");
    })

    connection.execute(createPaymentsTable,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("Payment Table is Created");
    })
})

module.exports = connection;