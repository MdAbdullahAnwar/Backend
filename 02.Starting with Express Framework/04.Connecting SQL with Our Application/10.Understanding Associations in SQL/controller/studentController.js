const db = require('../utils/db-connection');
const Student = require('../models/students');
const IdentityCard = require('../models/identitycard');

// Add student
const addedEntities = async (req, res) => {
    try{
        const { email, name } = req.body;
        const student = await Student.create({ 
            email: email,
            name: name
        });

        res.status(201).send(`User with name: ${name} has been created`);
    }
    catch(error){
        res.status(500).send(`Unable to create user due to ${error}`);
    }
    
};

// Update student
const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const student = await Student.findByPk(id);

    if (!student) {
        res.status(404).send(`Student with id: ${id} not found`);
    }
    student.name = name;
    student.email = email;
    await student.save();
    res.status(200).send(`Student with id: ${id} updated successfully`);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Unable to update user due to ${error.message}`);
  }
};

// Delete student
const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.destroy({ where: { id } });

    if (!student) {
      res.status(404).send(`Student with id ${id} not found`);
    }

    res.status(200).send(`Student with id: ${id} deleted successfully`);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Unable to delete user due to ${error.message}`);
  }
};

const addingValuesToStudentAndIdentityTable = async(req,res) => {
    try{
        const student = await Student.create(req.body.student);
        const idCard = await IdentityCard.create({
            ...req.body.identityCard,
            StudentId:student.id
        });
        res.status(201).json({student,idCard});
    } catch (error) {
        console.log(error);
        res.status(500).send(`Unable to create user due to ${error.message}`);
    }
}

module.exports = {
  addedEntities,
  updateEntry,
  deleteEntry,
  addingValuesToStudentAndIdentityTable
};
