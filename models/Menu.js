const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    is_drink: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const menuItem = mongoose.model('Menu', menuSchema);
module.exports = menuItem;