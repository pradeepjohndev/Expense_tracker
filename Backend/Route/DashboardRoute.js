const express = require('express');
const { Protect } = require('../Middleware/Authmiddleware')
const { getDashboard } = require('../Controller/dashboardController');
const router = express.Router();

router.get('/', Protect, getDashboard);

module.exports = router;
