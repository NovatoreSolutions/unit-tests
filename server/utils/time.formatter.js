
module.exports = function(hour, min, sec){
    var finalHour = '', finalMin = '' , finalSec = '';
    if(hour >= 1){
        finalHour = (hour) + ' ' + (hour > 1? "Hours": "Hour");
    }
    if(min >= 1){
        finalMin = (min) + ' '+ ( min > 1? "Minutes": "Minute");
    }
    if (sec >= 1){
        finalSec = (sec) + ' ' + ( sec > 1? "Seconds": "Second");
    }

    if(hour && min && !sec){
        return finalHour + ' and ' + finalMin ;
    }
    else if (!hour && min && !sec){
        return finalMin
    }
    else if (!hour && !min && sec){
        return finalSec
    }
    else if (hour && min && sec){
        return finalHour + ' ' + finalMin + ' and ' + finalSec;
    }
    else if (min && sec){
        return  finalMin + ' and ' + finalSec;
    }
    else if (hour && !min && !sec ){
        return finalHour
    }
    else {
        return 'Invalid Entry'
    }

};