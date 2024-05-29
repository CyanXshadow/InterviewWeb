const express = require('express');
const { executeCode } = require('../controllers/codeController');
const router = express.Router();

router.post('/', executeCode);

module.exports = router;
