const db = require('../utils/db-connection');

const addedEntities = (req, res) => {
    const { email, name } = req.body;
    const insertQuery = 'INSERT INTO student (email, name) VALUES (?, ?)';

    db.execute(insertQuery, [email, name], (err) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }

        console.log("Value has been Inserted");
        res.status(200).send(`Student with name ${name} and email ${email} has been successfully added`);
    });
};

const updateEntry = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const updateQuery = 'UPDATE student SET name = ?, email = ? WHERE id = ?';

    db.execute(updateQuery, [name, email, id], (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }

        if (result.affectedRows === 0) {
            res.status(404).send(`Student with id ${id} not found`);
            return;
        }

        console.log("Value has been Updated");
        res.status(200).send(`Student with id ${id} has been successfully updated to name ${name} of email ${email}`);
    });
};

const deleteEntry = (req, res) => {
    const { id } = req.params;
    const deleteQuery = 'DELETE FROM student WHERE id = ?';

    db.execute(deleteQuery, [id], (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }

        if (result.affectedRows === 0) {
            res.status(404).send(`Student with id ${id} not found`);
            return;
        }

        console.log("Value has been Deleted");
        res.status(200).send(`Student with id ${id} has been successfully deleted`);
    });
}; 

module.exports = { 
    addedEntities,
    updateEntry,
    deleteEntry 
};