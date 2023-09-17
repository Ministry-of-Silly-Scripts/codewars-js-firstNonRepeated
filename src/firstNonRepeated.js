function firstNonRepeated(s) {
  if (s.length === 1) {
    return s
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
