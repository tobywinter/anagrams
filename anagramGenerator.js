const VariantTableGenerator = require("./variantTableGenerator");

function anagramGenerator(word = "") {
  let anagrams = [];
  if (word.length >= 1) anagrams.push(word);

  if (word.length >= 2) {
    let letters = word.split("");
    letters.reverse();
    anagrams.push(letters.join(""));
  }

  if (word.length >= 3) {
    let letters = word.split("");
    const variantTable = new VariantTableGenerator().generate(word.length);
    variantTable.forEach((variant) => {
      let result = buildAnagram(letters, variant);
      anagrams.push(result);
    });
  }
  return anagrams;
}

function buildAnagram(letters, variant) {
  let anagram = "";
  variant.forEach((index) => {
    anagram += letters[index];
  });
  return anagram;
}

module.exports = anagramGenerator;
