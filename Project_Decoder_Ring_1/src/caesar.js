// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//charAt() method
//parse() method
//indexOf() method
//replace() method

const caesarModule = (function () {
  // create alphabet variable in full scope of function containing actual alpbahet for refering 'input' values to
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  // create casear function with 'input', 'shift' and 'encode = true' parameters
  function caesar(input, shift, encode = true) {
    // create empty 'results' array for pushing encoded message out of loops
    let results = [];
    // create if-statement to return 'false' if 'shift' value does not the specifications:
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    // create loop to go through index of 'input' and access one letter at a time
    for (let i = 0; i < input.length; i++) {
      // if the current index is a special character or space, push to 'results' array with no shift
      let specialChar = ["?", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
      if (input[i] === " " || input[i] === "!" || input[i] === specialChar) {
        results.push(input[i]);
      }
      // loop thru alphabet array in order to get access to one letter at a time
      for (let j = 0; j < alphabet.length; j++) {
        // match the first letter of 'input' with the corresponding letter of the alphabet, using toLowerCase method to ignore possible capital letters
        if (input[i].toLowerCase() === alphabet[j].toLowerCase()) {
          // apply .toLowerCase() to input value
          input[i].toLowerCase();
          // create new variable to hold the letter, shifted by 3 ('shift' value)
          let shiftedValue = 0;
          // check if encoding or decoding input
          if (encode === true) {
            shiftedValue = j + shift;
          }
          // if we are decoding...
          else {
            shiftedValue = j - shift;
          }
          // console.log(shiftedValue);
          // create if statement to determine if shiftedValue is shifting at end of alphabet in order to loop back around
          if (shiftedValue >= 26) {
            // math.abs() converts math values from negative to positive
            shiftedValue = Math.abs(26 - shiftedValue);
          } else if (shiftedValue < 0) {
            shiftedValue = Math.abs(shiftedValue + 26);
          }
          // push 'alphabet' variable with shifted index to 'results' array
          results.push(alphabet[shiftedValue]);
        }
      }
    }
    // return encoded/ decoded 'results' variable using join method to turn array into a string
    //  console.log(results);
    return results.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
