/**
 * Created by macbookpro on 11/07/2017.
 */

/**
 * takes an array of strings (tasks) and returns a formatted string with each element as bullet or numbered
 * @param bulletFormat
 * @param tasks
 * @returns {*}
 */
 module.exports = function(tasks, bulletFormat){
     var tasksLength, formattedString = "", isBullet;
     tasksLength = tasks.length;
     if(!tasksLength){
         return "";
     }
     isBullet = (bulletFormat == "number")? false: true;

     for (var i = 0; i < tasksLength; i++) {
         formattedString += (isBullet? insertBullet() : insertBullet(i+1)) + tasks[i] + '\n';
     }

     function insertBullet(index){
         if(index){
             return (index) + ". "
         }
         return "- ";
     };

     return formattedString;
 };