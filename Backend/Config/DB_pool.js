const mongoose = require('mongoose')
require('dotenv').config();

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MongoDB, {});
        console.log("connected successfully")
    }
    catch (err) {
        console.log("error connect to db ", err);
        process.exit(1);
    }
}

module.exports = ConnectDB;