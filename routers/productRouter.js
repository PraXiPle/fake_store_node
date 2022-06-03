const productBL = require('../BL/productBL')


function Router(app) {

    app.get('/product', async (req, res) => {
        try {
            const product = await productBL.getProductById(req.query.id)

            res.status(200).send(product)
        } catch (error) {
            res.status(404).send(error)
        }
    })

    app.post('/products', async (req, res) => {
        try {
            const products = await productBL.getProducts(req.body)
            res.status(200).send(products)
        } catch (error) {
            res.status(404).send(error)
        }
    })

    app.post('/product/add', async (req, res) => {
        try {
            const products = await productBL.creatProduct(req.body)
            res.status(200).send(products)
        } catch (error) {
            res.status(404).send(error)
        }
    })
    app.put('/product/edit', async (req, res) => {
        try {
            const products = await productBL.updateProductById(req.query.id, req.body)
            res.status(200).send(products)
        } catch (error) {
            res.status(404).send(error)
        }
    })
    app.delete('/product/delete', async (req, res) => {
        try {
            const products = await productBL.deleteProductById(req.query.id)
            res.status(200).send(products)
        } catch (error) {
            res.status(404).send(error)
        }
    })

}
module.exports = Router