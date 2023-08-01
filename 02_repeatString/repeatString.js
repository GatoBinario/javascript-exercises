const repeatString = function(string, times) {
    if(times < 0) {
        return "ERROR";
    }
    let returnedText = "";
    for (let i = 0; i < times; i++) {
        returnedText += string;
    }
    return returnedText;
};

// Do not edit below this line
module.exports = repeatString;
