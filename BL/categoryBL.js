const categoryController = require('../DL/controllers/categoryController')

async function getCategoryById(id) {

    try {
        const category = await categoryController.findById(id)
        return category

    } catch (error) {
        throw 'no such category with that id ' + id
    }

}


async function getCategories(filter) {
    const categories = await categoryController.find(filter)

    if (categories.length == 0) throw 'no categories has been found '

    return categories

}

async function creatCategory(category) {
    try {
        const newCategory = await categoryController.creat(category)

        return newCategory

    } catch (error) {

        throw 'error creating new category'

    }

}

async function updateCategoryById(id, newData) {
    const category = await getCategoryById(id)
    delete newData._id
    delete newData.isActive
    try {
        const updatedCategory = await categoryController.update(id, newData)
        return updatedCategory

    } catch (error) {

        throw 'error updating the category'

    }
}


async function deleteCategoryById(id) {

    const category = await getCategoryById(id)

    try {
        const deletedCategory = await categoryController.del(id)
        return 'category has been deleted '
    } catch (error) {
        throw 'error while deleting categroy '
    }

}

module.exports = { deleteCategoryById, updateCategoryById, creatCategory, getCategories, getCategoryById }


