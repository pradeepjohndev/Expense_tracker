const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getUserinfo } = require('../Controller/authController')

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUserinfo", getUserinfo);

module.exports = router