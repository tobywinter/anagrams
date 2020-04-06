const AnagramGenerator = require("./anagramGenerator");
describe("AnagramGenerator", () => {
  let anagramGenerator;
  beforeEach(() => {
    anagramGenerator = new AnagramGenerator();
  });

  it("returns [] if passed nothing", () => {
    expect(anagramGenerator.generate()).toEqual([]);
  });

  it("returns ['b'] if passed 'b'", () => {
    expect(anagramGenerator.generate("b")).toEqual(["b"]);
  });

  it("returns ['bi', 'ib'] if passed 'bi'", () => {
    expect(anagramGenerator.generate("bi")).toEqual(["bi", "ib"]);
  });

  it.each([["rib"], ["bir"], ["ibr"], ["irb"], ["rib"], ["bri"], ["rbi"]])(
    "returns an array containing %s when passed 'bir'",
    (expectation) => {
      expect(anagramGenerator.generate("bir")).toEqual(
        expect.arrayContaining([expectation])
      );
    }
  );

  // it.each([["biro"], ["bior"]])(
  //   "returns an array containing %s when passed 'biro'",
  //   (expectation) => {
  //     expect(anagramGenerator.generate("biro")).toEqual(
  //       expect.arrayContaining([expectation])
  //     );
  //   }
  // );
});

// [['biro'], ['bior'], ['brio'], ['broi'], ['boir'], ['bori'],
// ['ibro'], ['ibor'], ['irbo'], ['irob'], ['iobr'], ['iorb'],
// ['rbio'], ['rboi'], ['ribo'], ['riob'], ['roib'], ['robi'],
// ['obir'], ['obri'], ['oibr'], ['oirb'], ['orbi'], ['orib']]
