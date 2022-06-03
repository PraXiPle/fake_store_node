const userController = require('../DL/controllers/userController')

async function getUserById(id) {

    const user = await userController.findById(id)

    if (!user) throw 'no such user'

    return user
}


async function getUsers(filter) {
    const users = await userController.find(filter)

    if (users.length == 0) throw 'no users has been found '
    // console.log(users);
    return users

}

async function creatUser(user) {
    try {

        const newUser = await userController.create(user)

        return newUser

    } catch (error) {

        throw 'error adding new user'

    }

}

async function updateUseById(id, newData) {
    const user = await getUserById(id)
    delete newData._id

    delete newData.isActive

    try {
        const updatedUse = await userController.update(id, newData)
        return updatedUse

    } catch (error) {

        throw 'error updating the user'
    }
}


async function deleteUserById(id) {

    const user = await getUserById(id)

    try {
        const deletedUser = await userController.del(id)
        return deletedUser
    } catch (error) {
        throw 'error while deleting user '
    }

}

module.exports = { deleteUserById, updateUseById, creatUser, getUsers, getUserById }
