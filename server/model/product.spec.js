const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');

const Product = require('./product');

describe('Product Model', function () {
    describe('Virtuals', function () {
        var product;
        beforeEach(function () {
            product = new Product({
                name: "Galaxy",
                model: "S7",
                category: "Phone",
                subCategory: "Mobiles",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl erat, pellentesque vitae lectus non, dignissim rhoncus metus. Maecenas est urna, pulvinar nec rutrum molestie, tristique quis diam. Ut eget euismod leo, sed aliquam dui. Praesent eu consequat augue. Donec est dui, mattis quis velit a, lacinia convallis massa. Nullam nec pharetra odio. Sed faucibus orci ac sapien posuere dapibus. Donec dignissim dui felis, vitae mollis erat auctor eget. Aenean id enim in odio sagittis bibendum a eget massa. Nam luctus tincidunt urna, vitae rutrum ante ullamcorper a. Aliquam sed cursus ante. Pellentesque aliquet elementum mattis. Quisque fermentum eget diam. "
            })
        });

        describe('information', function() {
            it('should return "Galaxy-S7 belongs to the category Phone" when product object  name is Galaxy,model is S7 and category is Phone', function () {
                expect(product.information).to.equal('Galaxy-S7 belongs to the category Phone.');
            });
        })

        describe('shortDescription', function() {
            it('should return "Lorem ipsum dolor sit amet, consectetur adipiscing..." when description is "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl erat, pellentesque vitae lectus non, dignissim rhoncus metus. Maecenas est urna, pulvinar nec rutrum molestie, tristique quis diam. Ut eget euismod leo, sed aliquam dui. Praesent eu consequat augue. Donec est dui, mattis quis velit a, lacinia convallis massa. Nullam nec pharetra odio. Sed faucibus orci ac sapien posuere dapibus. Donec dignissim dui felis, vitae mollis erat auctor eget. Aenean id enim in odio sagittis bibendum a eget massa. Nam luctus tincidunt urna, vitae rutrum ante ullamcorper a. Aliquam sed cursus ante. Pellentesque aliquet elementum mattis. Quisque fermentum eget diam."', function() {
                expect(product.shortDescription).to.equal('Lorem ipsum dolor sit amet, consectetur adipiscing...');
            });

        })




    })



})
