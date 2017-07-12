const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    address: {
        country: {type: String},
        city: {type: String},
        state: {type: String},
        street: {type: String},
        zip: {type: String}
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

UserSchema
    .virtual('fullName')
    .get(function () {
        return this.firstName + ' ' + this.lastName;
    });


UserSchema
    .virtual('fullAddress')
    .get(function () {
        return this.address.street + ' ' + this.address.zip + ', '+ this.address.city+ ' ' + this.address.state + ', ' + this.address.country;
    });

module.exports = mongoose.model('User', UserSchema);