const productController = require('../DL/controllers/productController')

async function getProductById(id) {

    const product = await productController.findById(id)

    if (!product) throw 'no such product'

    return product
}


async function getProducts(filter) {
    const products = await productController.find(filter)

    if (products.length == 0) throw 'no products has been found '

    return products

}

async function creatProduct(product) {
    try {
        const newProduct = await productController.create(product)

        return newProduct

    } catch (error) {

        throw 'error creating new product'

    }

}

async function updateProductById(id, newData) {
    const product = await getProductById(id)
    delete newData._id
    delete newData.isActive
    try {
        const updatedproduct = await productController.update(id, newData)
        return updatedproduct

    } catch (error) {

        throw 'error updating the product'

    }
}


async function deleteProductById(id) {

    const product = await getProductById(id)

    try {
        const deletedProduct = await productController.del(id)
        return deletedProduct
    } catch (error) {
        throw 'error while deleting product '
    }

}

module.exports = { deleteProductById, updateProductById, creatProduct, getProducts, getProductById }
