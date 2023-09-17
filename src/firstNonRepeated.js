function firstNonRepeated(str) {
  let freq = getCharFrequency(str)

  for (const char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

function getCharFrequency (str) {
  const count = {};

  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  return count;  
}

module.exports = { firstNonRepeated, getCharFrequency };
