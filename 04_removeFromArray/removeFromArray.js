const removeFromArray = function(array, ...args) {
    let newArray = array;
    for(let i = 0; i<args.length; i++) {
        newArray = removeElementFromArray(array, args[i])
    }
    return newArray;
};

function removeElementFromArray(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        const x = array.splice(index, 1);
    }
    return array;
}

removeFromArray([1, 2, 3, 4], 7, "tacos")

// args es un array
// https://stackoverflow.com/questions/71484291/dealing-with-multiple-optional-arguments-in-a-javascript-function

// Do not edit below this line
module.exports = removeFromArray;
