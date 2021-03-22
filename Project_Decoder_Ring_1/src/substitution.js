// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const checkIfUnique = function (input) {
    // if charcters are not unique, should return false
    for (let i = 0; i < input.length; i++) {
      if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])) {
        return false;
      }
    }
    return true;
  };

  function substitution(input, alphabet, encode = true) {
    // to avoid capital letters, use .toLowerCase() method
    input = input.toLowerCase();
    // create 'trueAlphabet' variable
    const trueAlphabet = "abcdefghijklmnopqrstuvwxyz";
    // redefine 'alphabet' variable for comparison
    const subAlphabet = alphabet;
    // return false if subAlphabet does not exist, or length does not equal 26, or is not entirely unique
    if (
      !subAlphabet ||
      subAlphabet.length !== 26 ||
      !checkIfUnique(subAlphabet)
    ) {
      return false;
    }
    // create 'result' variable
    let result = "";
    // start encoding
    if (encode === true) {
      //loop through 'input' - use charcode to get index for subAlphabet
      for (let j = 0; j < input.length; j++) {
        // make certain to keep all spaces intact
        if (input[j] === " ") {
          result += " ";
        } else {
          const indexSwap = input.charCodeAt(j) - 97;
          // assert letter from subAlphabet to result
          result += subAlphabet[indexSwap];
        }
      }
      // or start decoding (if encode set to false)
    } else {
      for (let k = 0; k < input.length; k++) {
        // keep all spaces
        if (input[k] === " ") {
          result += " ";
        } else {
          for (let l = 0; l < subAlphabet.length; l++) {
            // if input matches character in subAlphabet
            if (input[k] === subAlphabet[l]) {
              // add result to index of trueAlphabet array to create new variable
              result += trueAlphabet[l];
            }
          }
        }
      }
    }
    //console.log(result);
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
