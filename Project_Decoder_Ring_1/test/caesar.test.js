// Write your tests here!

/*
caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false
*/

const { expect } = require("chai");

const caesar = require("../src/caesar");

describe("caesar function", () => {
  it("should return encoded message from given 'input' and 'shift' parameters", () => {
    const input = "thinkful";
    const expected = "wklqnixo";
    const actual = caesar(input, 3);
    expect(actual).to.equal(expected);
  });
  it("should return encoded message if 'shift' value", () => {
    const input = "thinkful";
    const expected = "qefkhcri";
    const actual = caesar(input, -3);
    expect(actual).to.equal(expected);
  });
  it("should handle shifts that go past the end of the alphabet", () => {
    const input = "zapped";
    const shift = 3;
    const expected = "cdsshg";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  it("should return 'false' if the 'shift' value is equal to 0", () => {
    const shift = 0;
    const expected = false;
    const actual = caesar("thinkful", shift);
    expect(actual).to.equal(expected);
  });
  it("should return 'false' if the 'shift' value is less than -25", () => {
    const shift = -26;
    const expected = false;
    const actual = caesar("thinkful", shift);
    expect(actual).to.equal(expected);
  });
  it("should return 'false' if the 'shift' value is greater than 25", () => {
    const shift = 26;
    const expected = false;
    const actual = caesar("thinkful", shift);
    expect(actual).to.equal(expected);
  });
  it("should return 'false' if the 'shift' value is not present", () => {
    const expected = false;
    const actual = caesar("thinkful");
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const input = "THINKFUL";
    const expected = "wklqnixo";
    const actual = caesar(input, 3);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and other non-alphabetical symbols in the message when encoding", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and other non-alphabetical symbols in the message when decoding", () => {
    const expected = "This is a secret message!";
    const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  });
  it("should decode message if 'encode' paramter is set to 'false'", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });
});
