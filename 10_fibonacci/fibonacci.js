const fibonacci = function (index) {
    if (index < 0) {
        return "OOPS";
    }
    let numbers = [0, 1]
    for (let i = 0; i < index - 1; i++) {
        numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
    }
    console.log(numbers)
    return numbers[index];
};

// Do not edit below this line
module.exports = fibonacci;
