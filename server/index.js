const taskFormatter = require('./utils/tasks.formatter');

console.log(taskFormatter(['a', 'b', 'c']));

const findMongoDayOfWeek  = require('./utils/mongo.day.finder.js')

const timeche =  require ('./utils/time.formatter.js')

console.log(timeche(null,4,null));


const User = require('./model/user');


var user = new User({
    firstName : "Ameer",
    lastName : "Hyder"
});

console.log(user.fullName);
