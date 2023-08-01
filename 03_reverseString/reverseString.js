const reverseString = function(string) {
    let reversedText = "";
    for(let i = string.length-1; i >= 0; i--) {
        reversedText+=string[i];
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
