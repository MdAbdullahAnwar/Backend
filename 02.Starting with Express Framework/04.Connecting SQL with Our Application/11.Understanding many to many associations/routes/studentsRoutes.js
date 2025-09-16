const express = require('express');
const studentController = require('../controller/studentController');
const router = express.Router();

router.post('/add', studentController.addedEntities);
router.put('/update/:id', studentController.updateEntry);
router.delete('/delete/:id', studentController.deleteEntry);

router.post('/addingStudentsWithCard', studentController.addingValuesToStudentAndIdentityTable);

module.exports = router;
