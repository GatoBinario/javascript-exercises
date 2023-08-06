const sumAll = function(startN, endN) {
    if(typeof startN !== "number" || typeof endN !== "number") {
        return "ERROR";
    }
    else if(startN < 0 || endN < 0) {
        return "ERROR";
    }
    let sum = 0;
    if(startN <= endN) {
        for(let i = startN; i<=endN; i++) {
            sum+=i;
        }
    }
    else {
        for(let i = endN; i<=startN; i++) {
            sum+=i;
        }
    }
    return sum;
};

let x = sumAll(1,3);

// Do not edit below this line
module.exports = sumAll;
