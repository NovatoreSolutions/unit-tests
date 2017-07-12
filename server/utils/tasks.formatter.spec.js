const expect = require('chai').expect;
const sinon = require('sinon');
const tasksFormatter = require('./tasks.formatter');

describe ('Tasks Formatter',function(){

    it('should return empty string when tasks array is empty ', function() {
        var tasks = [];
        expect(tasksFormatter(tasks)).to.be.empty;
    });

    it('should return array with bullets each in new line, if format passed is bullet',function(){
        var tasks = ['Do chores','Help people'];
        var bulletFormat = 'bullet';
        expect(tasksFormatter(tasks, bulletFormat)).to.equal('- Do chores\n- Help people\n')
    })
    it('should return array with numbers each in new line, if format passed is number',function(){
        var tasks = ['Do chores','Help people'];
        var bulletFormat = 'number';

        expect(tasksFormatter(tasks, bulletFormat)).to.equal('1. Do chores\n2. Help people\n')
    })



});
