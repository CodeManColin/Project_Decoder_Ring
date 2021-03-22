// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusSquare = [
    { letter: "a", number: "11" },
    { letter: "b", number: "21" },
    { letter: "c", number: "31" },
    { letter: "d", number: "41" },
    { letter: "e", number: "51" },
    { letter: "f", number: "12" },
    { letter: "g", number: "22" },
    { letter: "h", number: "32" },
    { letter: "i", number: "42" },
    { letter: "j", number: "42" },
    { letter: "k", number: "52" },
    { letter: "l", number: "13" },
    { letter: "m", number: "23" },
    { letter: "n", number: "33" },
    { letter: "o", number: "43" },
    { letter: "p", number: "53" },
    { letter: "q", number: "14" },
    { letter: "r", number: "24" },
    { letter: "s", number: "34" },
    { letter: "t", number: "44" },
    { letter: "u", number: "54" },
    { letter: "v", number: "15" },
    { letter: "w", number: "25" },
    { letter: "x", number: "35" },
    { letter: "y", number: "45" },
    { letter: "z", number: "55" },
    { letter: " ", number: "00" },
  ];
  function enc(input) {
    let result = "";
    // create loop to match 'input' to data set
    input
      .toLowerCase()
      .split("")
      .forEach((letter) => {
        let newObj = polybiusSquare.find((value) => letter === value.letter);
        // console.log(obj);
        // set 'i' and 'j' equal to value of 42
        if (newObj.letter === "i" || newObj.letter === "j") {
          newObj.number = 42;
        }
        // console.log(obj);
        // add correlating numbers to result
        result += newObj.number;
      });
    // return result replacing any doubleZero with a space
    return result.replace("00", " ");
  }

  function decode(input) {
    // substitute doubleZero for spaces
    const doubleZero = input.replace(" ", "00");
    const doubleZeroLength = doubleZero.length;
    // determine length; if not even, return false
    if (doubleZeroLength % 2 != 0) return false;

    let result = "";
    // create loop to match input to data set
    doubleZero.match(/.{1,2}/g).forEach((pair) => {
      let newObj = polybiusSquare.find((value) => pair === value.number);
      // console.log(obj);
      // set "(i/j)" output for number '42'
      if (!newObj) {
        newObj = { number: "42", letter: "(i/j)" };
      }
      // add correlating letters result
      result += newObj.letter;
    });

    return result;
  }
  function polybius(input, encode = true) {
    // if endcode set to true, encode, else return decode
    let result = encode ? enc(input) : decode(input);

    return result;
  }
  return {
    polybius,
  };
})();
module.exports = polybiusModule.polybius;
