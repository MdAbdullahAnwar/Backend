const mysql = require('mysql2');

const connection = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': 'Abd@2109',
    'database': 'student_management_db'
})

connection.connect((err)=>{
    if(err){
        console.log("Error in connecting to database", err);    
    }

    console.log("Connected to database");

    const createStudentTable = ` 
        CREATE TABLE IF NOT EXISTS students(
	        id INT AUTO_INCREMENT PRIMARY KEY,
	        name VARCHAR(20) NOT NULL,
	        email VARCHAR(25) UNIQUE NOT NULL,
	        age INT CHECK (age >= 0)
        )
    `;

    connection.execute(createStudentTable, (err)=>{
        if(err){
            console.log("Error in creating student table", err);
            connection.end();
            return;
        }

        console.log("Student Table Created");
    });
})

module.exports = connection;