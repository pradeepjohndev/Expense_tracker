const express = require('express');
const { Protect } = require('../Middleware/Authmiddleware')
const { getDashboardData } = require('../Controller/dashboardController');

const route = express.route();

route.get('/', Protect, getDashboardData);

module.exports = router;
