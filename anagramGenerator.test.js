const anagramGenerator = require("./anagramGenerator");
describe("AnagramGenerator", () => {
  it("returns [] if passed nothing", () => {
    expect(anagramGenerator()).toEqual([]);
  });

  it("returns ['b'] if passed 'b'", () => {
    expect(anagramGenerator("b")).toEqual(["b"]);
  });

  it("returns ['bi', 'ib'] if passed 'bi'", () => {
    expect(anagramGenerator("bi")).toEqual(["bi", "ib"]);
  });

  it.each([["rib"], ["bir"], ["ibr"], ["irb"], ["rib"], ["bri"], ["rbi"]])(
    "returns an array containing %s when passed 'bir'",
    (expectation) => {
      expect(anagramGenerator("bir")).toEqual(
        expect.arrayContaining([expectation])
      );
    }
  );

  it.each([["biro"], ["bior"]])(
    "returns an array containing %s when passed 'biro'",
    (expectation) => {
      expect(anagramGenerator("biro")).toEqual(
        expect.arrayContaining([expectation])
      );
    }
  );
});

// [['biro'], ['bior'], ['brio'], ['broi'], ['boir'], ['bori'],
// ['ibro'], ['ibor'], ['irbo'], ['irob'], ['iobr'], ['iorb'],
// ['rbio'], ['rboi'], ['ribo'], ['riob'], ['roib'], ['robi'],
// ['obir'], ['obri'], ['oibr'], ['oirb'], ['orbi'], ['orib']]
