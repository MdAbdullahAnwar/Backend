const express = require('express');
const courseController = require('../controller/courseController');
const router = express.Router();

router.post('/addCourses', courseController.addCourse);
router.get('/addStudentsToCourses', courseController.addStudentsToCourses);

module.exports = router;
