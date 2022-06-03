const productModel = require('../models/productModule')

async function create(product) {
    const newProduct = await productModel.create(product)
    return newProduct
}
async function findById(id) {
    try {
        const product = await productModel.findById(id)
            .populate({ path: 'category', select: ['name'] })

        return product
    } catch (error) {

        throw 'the product not exsist'
    }

}
async function find(filter = {}) {
    const product = await productModel.find({ ...filter, isActive: true })
        .populate({ path: 'category', select: ['name'] })
    return product
}

async function del(id) {
    const product = await productModel.findByIdAndUpdate(id, { isActive: false }, { new: true })
    return product
}

async function update(id, newData) {
    const newProduct = await productModel.findByIdAndUpdate(id, newData, { new: true })
    return newProduct
}

module.exports = { update, del, find, findById, create }
require('../../db.js')