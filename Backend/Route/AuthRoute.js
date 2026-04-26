const express = require('express');
const router = express.Router();
const { Protect } = require('../Middleware/Authmiddleware')
const { registerUser, loginUser, getUserinfo } = require('../Controller/authController')

router.post('/register', registerUser);

router.post("/login", loginUser);

router.get("/getUser", Protect, getUserinfo);

module.exports = router