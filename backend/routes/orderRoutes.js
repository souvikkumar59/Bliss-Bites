const express = require('express');
const router = express.Router();
const { placeOrder } = require('../controllers/cartController');

router.post('/', placeOrder);

module.exports = router;
