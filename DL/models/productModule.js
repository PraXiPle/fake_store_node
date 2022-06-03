const mongoose = require('mongoose')
// const category = require('./categoryModule')

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },

    price: { type: Number, required: true, },

    description: { type: String, required: true },

    category: { type: mongoose.Types.ObjectId, ref: 'category' },

    isActive: { type: Boolean, default: true },

    image: { type: String },

    rating: {
        rate: { type: Number },
        count: { type: Number }
    }

})

const productModel = mongoose.model('product', productSchema)

module.exports = productModel