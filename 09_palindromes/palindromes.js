const palindromes = function (input) {
    input = input.replace(/[. ,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    input = input.toLowerCase();

    let palindrome = true;
    for (let i = 0; i < input.length/2; i++) {
      // console.log(`${i} ${input[i]}`);
      // console.log(`${input.length-i-1} ${input[input.length-i-1]}`);
      palindrome = input[i] === input[input.length-1-i];
      if (!palindrome) {
        return false;
      }
    }
    return true;
};

palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
