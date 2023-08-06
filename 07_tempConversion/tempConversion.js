const convertToCelsius = function(fDegrees) {
    return Math.round(5/9*(fDegrees-32)*10)/10
};

const convertToFahrenheit = function(cDegrees) {
    return Math.round((9/5*cDegrees+32)*10)/10
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
