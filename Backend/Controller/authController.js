const JWT = require('jsonwebtoken');
const User = require('../Model/Users');

const generateToken = () => {
    return JWT.sign({ id }, process.env.JWT_secret, { expiresIn: "1h" })
    console.log(process.env.JWT_secret)
}

exports.registerUser = async (req, res) => {
    const { fullName, email, password, profileImageUrl } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ message: "some fields are missing" })
    }

    try {
        const existingUser = await User.find({ email });
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
exports.loginUser = async (req, res) => { };

exports.getUserinfo = async (req, res) => { };