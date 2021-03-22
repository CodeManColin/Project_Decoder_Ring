// Write your tests here!
/*
polybius("thinkful"); //> "4432423352125413"
polybius("Hello world"); //> '3251131343 2543241341'

polybius("3251131343 2543241341", false); //> "hello world"
polybius("4432423352125413", false); //> "th(i/j)nkful
polybius("44324233521254134", false); //> false

*/

const { expect } = require("chai");

const polybius = require("../src/polybius");

describe("Polybius Square Function", () => {
  it("should return an encoded message of numbers from given 'input'", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful");
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const expected = "4432423352125413";
    const actual = polybius("THINKFUL");
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces", () => {
    const input = "Hello World";
    const expected = "3251131343 2543241341";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });
  it("should decode message if 'encode' parameter set to 'false'", () => {
    const input = "4432423352125413";
    const expected = "th(i/j)nkful";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });
  it("When encoding, it translates both 'i' and 'j' to '42'", () => {
    const expected = "4242";
    const actual = polybius("ij");
    expect(actual).to.equal(expected);
  });
});
