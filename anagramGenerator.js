const VariantTableGenerator = require("./variantTableGenerator");

class AnagramGenerator {
  constructor() {
    this.anagrams = [];
  }

  buildAnagram(letters, variant) {
    let anagram = "";
    variant.forEach((index) => {
      anagram += letters[index];
    });
    return anagram;
  }

  generate(word = "") {
    if (word.length >= 1) this.anagrams.push(word);

    if (word.length >= 2) {
      let letters = word.split("");
      letters.reverse();
      this.anagrams.push(letters.join(""));
    }

    if (word.length >= 3) {
      let letters = word.split("");
      const variantTable = new VariantTableGenerator().generate(word.length);
      variantTable.forEach((variant) => {
        let result = this.buildAnagram(letters, variant);
        this.anagrams.push(result);
      });
    }
    return this.anagrams;
  }
}

module.exports = AnagramGenerator;
