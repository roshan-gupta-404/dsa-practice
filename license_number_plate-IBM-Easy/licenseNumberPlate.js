function createNumberPlate(rawStr) {
  let result = [];
  // length should be between 2-9
  if (rawStr.length < 2 || rawStr.length > 9) return "NA";
  //str should not contain specail char
  if (/[^A-Za-z0-9]/.test(rawStr)) return "contains special char";
  // str should contains atleast one number
  if (!/[0-9]/.test(rawStr)) return "does not contain number";

  rawStr = rawStr.toUpperCase()

  for (let i = 0; i < rawStr.length; i += 3) {
    result.push(rawStr.slice(i, i + 3));
  }

  result = result.join("-");
  
  return result;
}

console.log(createNumberPlate("a1dc"));
