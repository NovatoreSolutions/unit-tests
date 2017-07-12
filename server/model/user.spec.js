const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('./user');

describe('User Model', function() {

	describe('Virtuals', function() {
		var user;

		beforeEach(function() {
			user = new User({
				firstName : "Ameer",
				lastName : "Hyder",
				email: "ameer_testemail@yahoo.com",
				address: {
					country: "Pakistan",
					city: "Lahore",
					state: "Punjab",
					town: "Model Town",
					street: "Milaad Street",
					zip: "54000"
				}
			})
		});

		describe('fullName', function() {
			it('should return "Ameer Hyder" when user object first name is Ameer and last name is Hyder', function() {
				expect(user.fullName).to.equal('Ameer Hyder');
			});

		})

		describe('fullAddress', function() {
			it('should return "Milaad Street 54000, Lahore Punjab, Pakistan" when address object street is Milaad Street, city is Lahore, state is Punjab, country is Pakistan and zip is 54000 ', function() {
				expect(user.fullAddress).to.equal('Milaad Street 54000, Lahore Punjab, Pakistan');
			});

		})
	});



});