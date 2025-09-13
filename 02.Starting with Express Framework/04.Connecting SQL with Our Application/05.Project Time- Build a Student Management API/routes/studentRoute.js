const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.post('/students', studentController.addStudent);
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;