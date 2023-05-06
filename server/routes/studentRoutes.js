const express = require('express');
const studentController = require('../controllers/studentController')

const router = express.Router();

router.get('/:id', studentController.getStudentData);

module.exports = router;