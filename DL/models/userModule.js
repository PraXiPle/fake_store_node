const mongoose = require('mongoose')
// const category = require('./categoryModule')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },

    firstName: { type: String, required: true },

    lastName: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true, unique: true },

    isActive: { type: Boolean, default: true }

})

const usersModel = mongoose.model('users', userSchema)

module.exports = usersModel