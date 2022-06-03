const mongoose = require('mongoose')
// const category = require('./categoryModule')

const cartSchema = new mongoose.Schema({
    buyer: { type: mongoose.Types.ObjectId, ref: 'users' },

    productsId: [{ type: mongoose.Types.ObjectId, ref: 'product', quantity: { type: Number, default: 0 } }],

    sum: { type: Number, default: 0, },

    isSended: { type: Boolean, default: false },

})

const cartModel = mongoose.model('cart', cartSchema)

module.exports = cartModel