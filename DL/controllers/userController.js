const userModel = require('../models/userModule')

async function create(user) {
    const newUser = await userModel.create(user)
    return newUser
}

async function findById(id) {

    try {
        const user = await userModel.findById(id)

        return user
    } catch (error) {

        throw 'the user not exsist'
    }

}

async function find(filter = {}) {
    const user = await userModel.find({ ...filter, isActive: true })
    return user
}

async function del(id) {
    const user = await userModel.findByIdAndUpdate(id, { isActive: false }, { new: true })
    return user
}

async function update(id, newData) {
    const updatedUser = await userModel.findByIdAndUpdate(id, newData, { new: true })
    return updatedUser
}

module.exports = { update, del, find, findById, create }
