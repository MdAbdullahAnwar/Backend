const db = require('../utils/db-connection');

const addStudent = (req, res) => {
    const { name, email, age } = req.body;
    const query = 'INSERT INTO students (name, email, age) VALUES (?, ?, ?)';
    db.execute(query, [name, email, age], (err, result) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        res.status(201).send(`Student ${name} added successfully with ID ${result.insertId}`);
    });
}

const getAllStudents = (req, res) => {
    const query = 'SELECT * FROM students';
    db.execute(query, (err, results) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        res.status(200).json(results);
    });
}

const getStudentById = (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM students WHERE id = ?';
    db.execute(query, [id], (err, results) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        if (results.length === 0) {
            return res.status(404).send('Student not found');
        }
        res.status(200).json(results[0]);
    });
}

const updateStudent = (req, res) => {
    const id = req.params.id;
    const { name, email, age } = req.body;
    const query = 'UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?';
    db.execute(query, [name, email, age, id], (err, result) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Student not found');
        }
        res.status(200).send(`Student with ID ${id} updated successfully`);
    });
}

const deleteStudent = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM students WHERE id = ?';
    db.execute(query, [id], (err, result) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Student not found');
        }
        res.status(200).send(`Student with ID ${id} deleted successfully`);
    });
}

module.exports = { 
    addStudent, 
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent 
};