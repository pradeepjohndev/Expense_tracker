const express = require('express');
const expenseController = require('../Controller/expenseController');
const { Protect } = require("../Middleware/Authmiddleware");
const router = express.Router();

router.post('/add', Protect, expenseController.addExpense);
router.get('/getall', Protect, expenseController.getallExpense);
router.get('/downloadexcl', Protect, expenseController.downloadExpense);
router.delete('/:id', Protect, expenseController.deleteExpense);

module.exports = router;



