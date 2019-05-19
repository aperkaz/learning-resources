const isPangram = sentence => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  sentence.split("").forEach((letter, i) => {
    const letterIndex = alphabet.indexOf(letter.toLowerCase());
    if (letterIndex >= 0) {
      alphabet.splice(letterIndex, 1);
    }
  });

  return alphabet.length === 0;
};

module.exports = { isPangram };
