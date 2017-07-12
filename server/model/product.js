/**
 * Created by macbookpro on 12/07/2017.
 */
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: {type: String},
    model: {type: String},
    category: {type: String},
    subCategory: {type: String},
    description: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Product', ProductSchema);