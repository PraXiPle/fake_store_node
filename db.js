require('dotenv').config()

const mongoose = require('mongoose'),
    conStr = process.env.CONNECTION_STRING


const connect = async () => {
    try {
        await mongoose.connect(conStr)
        console.log('db is connected ');
    } catch (error) {
        console.log(error.message);
    }

}
connect()