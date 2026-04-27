const express = require('express');
const router = express.Router();
const { Protect } = require('../Middleware/Authmiddleware')
const { registerUser, loginUser, getUserinfo } = require('../Controller/authController');
const upload = require('../Middleware/uploadMiddleware')

router.post('/register', registerUser);

router.post("/login", loginUser);

router.get("/getUser", Protect, getUserinfo);

router.post("/upload-image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl });
});

module.exports = router