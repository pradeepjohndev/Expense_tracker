const express = require('express');
const incomeController = require('../Controller/incomeController');
const { Protect } = require("../Middleware/Authmiddleware");
const router = express.Router();

router.post('/add', Protect, incomeController.addIncome);
router.get('/getall', Protect, incomeController.getallIncome);
router.get('/downloadexcl', Protect, incomeController.downloadIncome);
router.delete('/:id', Protect, incomeController.deleteIncome);

module.exports = router;



