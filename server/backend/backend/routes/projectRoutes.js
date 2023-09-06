const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authController = require('../controllers/authController');

router.get('/getAllPosts', projectController.getAllPosts);
router.post('/createProjects', projectController.createProjects);
router.get('/recruitPage', projectController.recruitPage);
module.exports = router;