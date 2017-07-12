/**
 *
 * @param dayNumber
 * @param characters
 * @returns {*}
 */
module.exports = function(dayNumber, form)
{
    const format = (form !== "short" && form !== "long")? "long": form;
    return dayOfWeeks[format][dayNumber];
}


const dayOfWeeks = {
    short: {
        1: "Sun",
        2: "Mon",
        3: "Tue",
        4: "Wed",
        5: "Thu",
        6: "Fri",
        7: "Sat"
    },
    long: {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    }
}
