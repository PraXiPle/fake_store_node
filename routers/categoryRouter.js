const categoryBL = require('../BL/categoryBL')


function Router(app) {

    app.get('/category', async (req, res) => {
        try {
            const category = await categoryBL.getCategoryById(req.query.id)

            res.status(200).send(category)
        } catch (error) {
            res.status(404).send(error)
        }
    })

    app.post('/categories', async (req, res) => {
        try {
            const categories = await categoryBL.getCategories(req.body)
            res.status(200).send(categories)
        } catch (error) {
            res.status(404).send(error)
        }
    })
    
    app.post('/category/add', async (req, res) => {
        try {
            const categories = await categoryBL.creatCategory(req.body)
            res.status(200).send(categories)
        } catch (error) {
            res.status(404).send(error)
        }
    })
    app.put('/category/edit', async (req, res) => {
        try {
            const categories = await categoryBL.updateCategoryById(req.query.id, req.body)
            res.status(200).send(categories)
        } catch (error) {
            res.status(404).send(error)
        }
    })
    app.delete('/category/delete', async (req, res) => {
        try {
            const categories = await categoryBL.deleteCategoryById(req.query.id)
            res.status(200).send(categories)
        } catch (error) {
            res.status(404).send(error)
        }
    })

}
module.exports = Router