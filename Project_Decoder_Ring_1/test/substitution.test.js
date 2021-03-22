// Write your tests here!
/*
substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
*/

const { expect } = require("chai");

const substitution = require("../src/substitution");

describe("Substitution Cipher Function", () => {
  it("should return an encoded message from given 'input'", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const expected = "jrufscpw";
    const actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces when encoding", () => {
    const input = "you are an excellent spy";
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces when decoding", () => {
    const input = "elp xhm xf mbymwwmfj dne";
    const expected = "you are an excellent spy";
    const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal(expected);
  });
  it("should decode message if 'encode' parameter set to 'false'", () => {
    const input = "jrufscpw";
    const expected = "thinkful";
    const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal(expected);
  });
  it("If given 'alphabet' has repeating letters, should return false", () => {
    const expected = false;
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.equal(expected);
  });
  it("If given 'alphabet' has more than 26 letters, should return false", () => {
    const expected = false;
    const actual = substitution(
      "thinkful",
      "abcdefghijklmnopqrstuvwxyzabcdefg"
    );
    expect(actual).to.equal(expected);
  });
});
