const categoryModel = require('../models/categoryModule')

async function creat(category) {
    const newCategory = await categoryModel.create(category)
    return newCategory
}
async function find(filter = {}) {
    const category = await categoryModel.find({ ...filter, isActive: true })

    return category
}

async function findById(id) {

    try {
        const category = await categoryModel.findById(id)
        if(!category.isActive) throw 'category not exsit'
        return category

    } catch (error) {
        throw 'the category not exsist'

    }

}

async function del(id) {
    const category = categoryModel.findByIdAndUpdate(id, { isActive: false }, { new: true })

    return category

}
async function update(id, newdata) {
    const updatedCategory = await categoryModel.findByIdAndUpdate(id, newdata, { new: true })

    return updatedCategory
}

require("../../db")
module.exports = { update, del, findById, find, creat }