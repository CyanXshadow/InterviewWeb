const express = require('express');
const { createInterviewSession, joinInterviewSession } = require('../controllers/interviewController');
const router = express.Router();

router.post('/create', createInterviewSession);
router.post('/join', joinInterviewSession);

module.exports = router;
