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

ProductSchema
    .virtual('information')
    .get(function () {
        return this.name + '-' + this.model + ' belongs to the category '+this.category +'.'
    });
ProductSchema
    .virtual('shortDescription')
    .get(function () {
        return this.description.substr(0, 50)+'...'
    });


module.exports = mongoose.model('Product', ProductSchema);