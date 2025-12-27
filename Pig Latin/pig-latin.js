function transformWord(word) {
  let tempWord = word.toLowerCase();
  let index = -1;
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < tempWord.length; i++) {
    let ch = tempWord[i];
    if (vowels.has(ch)) {
      index = i;
      break;
    }
  }

  if (index == -1) {
    //if no vowel exist return word+ay 
    return word + "ay";
  }

  return word.slice(index) + word.slice(0, index) +"ay";
}

console.log(transformWord("Chscfebnm"));
