const JWT = require('jsonwebtoken');
const User = require('../Model/Users');

const generateToken = (id) => {
    return JWT.sign({ id }, process.env.JWT_secret, { expiresIn: "1h" });
};

exports.registerUser = async (req, res) => {
    const { fullName, email, password, profileImageUrl } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ message: "some fields are missing" })
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "user already exits" })
        }

        const user = await User.create({
            fullName, email, password, profileImageUrl
        });

        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id)
        });
    }
    catch (err) {
        res.status(500).json({ message: "error occured while registating user", error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "all fields are required" })
    };

    try {
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ message: "invalid credintials" });
        }
        res.status(200).json({
            id: user._id,
            user,
            token: generateToken(user._id),
        });
    }
    catch (err) {
        res.status(500).json({ message: "error occured while registating user", error: err.message });
    }
};

exports.getUserinfo = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(400).json({ message: "user not found" });
        }

        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ message: "error occured while registating user", error: err.message });
    }
};