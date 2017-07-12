const expect = require('chai').expect;
const sinon = require('sinon');
const timeFromatter = require('./time.formatter.js');

describe('Time Formatter',function(){


    it('should return "Invalid Entry" when no argument is passed', function() {
        expect(timeFromatter()).to.equal('Invalid Entry');
    });
    it('should return "4 Hours" when only 4 is passed as hour (first argument)', function() {
        expect(timeFromatter(4)).to.equal('4 Hours');
    });
    it('should return "6 Minutes" when only 6 is passed as minute (second argument) is passed', function() {
        expect(timeFromatter(null, 6)).to.equal('6 Minutes');
    });
    it('should return "6 Seconds" when only 6 is passed as seconds (Third argument) is passed', function() {
        expect(timeFromatter(null, null,6)).to.equal('6 Seconds');
    });
    it('should return "5 Hours and 3 Minutes" when only 5 is passed as Hour and 3 is passed as minute argument is passed', function() {
        expect(timeFromatter(5, 3)).to.equal('5 Hours and 3 Minutes');
    });
    it('should return "1 Hour 3 Minutes and 7 Seconds" when 1 is passed as hour , 3 is passed as minute and 7 is passed as seconds', function() {
        expect(timeFromatter(1, 3, 7)).to.equal('1 Hour 3 Minutes and 7 Seconds');
    });


});