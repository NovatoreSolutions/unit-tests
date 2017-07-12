const expect = require('chai').expect;
const sinon = require('sinon');
const findMongoDayOfWeek = require('./mongo.day.finder.js');

describe('Mongo Day Formatter',function(){
    it('should return undefined when no argument is passed', function() {
        expect(findMongoDayOfWeek()).to.be.undefined;
    });
     it('should return Sunday when Day is 1 and argument is long', function() {
        expect(findMongoDayOfWeek(1,'long')).to.equal('Sunday');
    });
    it('should return Sun when Day is 1 and argument is short', function() {
        expect(findMongoDayOfWeek(1,'short')).to.equal('Sun');
    });
    it('should return Monday when Day is 2 and argument is long', function() {
        expect(findMongoDayOfWeek(2,'long')).to.equal('Monday');
    });

    it('should return Mon when Day is 2 and argument is short', function() {
        expect(findMongoDayOfWeek(2,'short')).to.equal('Mon');
    });
    it('should return Tuesday when Day is 3 and argument is long', function() {
        expect(findMongoDayOfWeek(3,'long')).to.equal('Tuesday');
    });
    it('should return Tue when Day is 3 and argument is short', function() {
        expect(findMongoDayOfWeek(3,'short')).to.equal('Tue');
    });
    it('should return Wednesday when Day is 4 and argument is long', function() {
        expect(findMongoDayOfWeek(4,'long')).to.equal('Wednesday');
    });
    it('should return Wednesday when Day is 4 and argument is short', function() {
        expect(findMongoDayOfWeek(4,'short')).to.equal('Wed');
    });
    it('should return Thursday when Day is 5 and argument is long', function() {
        expect(findMongoDayOfWeek(5,'long')).to.equal('Thursday');
    });
    it('should return Thu when Day is 5 and argument is short', function() {
        expect(findMongoDayOfWeek(5,'short')).to.equal('Thu');
    });
    it('should return Friday when Day is 6 and argument is long', function() {
        expect(findMongoDayOfWeek(6,'long')).to.equal('Friday');
    });
    it('should return Fri when Day is 6 and argument is short', function() {
        expect(findMongoDayOfWeek(6,'short')).to.equal('Fri');
    });
    it('should return Saturday when Day is 7 and argument is long', function() {
        expect(findMongoDayOfWeek(7,'long')).to.equal('Saturday');
    });
    it('should return Sat when Day is 7 and argument is short', function() {
        expect(findMongoDayOfWeek(7,'short')).to.equal('Sat');
    });

});
