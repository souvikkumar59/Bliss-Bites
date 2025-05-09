const express = require('express');
const router = express.Router();
const { getTables, selectTable } = require('../controllers/tableController');

router.get('/', getTables);
router.post('/select', selectTable);

module.exports = router;
