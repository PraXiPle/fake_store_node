const userBL = require('../BL/userBL')


function Router(app) {

    app.get('/user', async (req, res) => {
        try {
            const user = await userBL.getUserById(req.query.id)
            res.status(200).send(user)
        } catch (error) {
            res.status(404).send()
        }

    })

    app.post('/users', async (req, res) => {
        try {
            const users = await userBL.getUsers(req.body)
            console.log(users);
            res.status(200).send(users)
        } catch (error) {
            res.send(error.message)
        }
    })


    app.post('/user/register', async (req, res) => {
        try {
            const user = await userBL.creatUser(req.body)
            res.status(200).send(user)
        } catch (error) {
            res.status(404).send(error)
        }
    })


    app.put('/user/edit', async (req, res) => {
        try {
            const user = await userBL.updateUseById(req.query.id, req.body)
            res.status(200).send(user)

        } catch (error) {

            res.status(404).send(error)
        }
    })


    app.delete('/user/delete', async (req, res) => {
        try {
            const user = await userBL.deleteUserById(req.query.id)
            res.status(200).send(user)
        } catch (error) {
            res.status(404).send(error)
        }
    })


}
module.exports = Router