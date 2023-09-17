# Notes

## Description

You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return `null` in JS or Java, `None` in Python, `'\0'` in C.

You can assume, that the input string has always non-zero length.

Examples

```
"test"   returns "e"
"teeter" returns "r"
"trend"  returns "t" (all the characters are unique)
"aabbcc" returns null (all the characters are repeated)
```

## Domain

- string manipulation 
- analyzing frequency of characters in a given string.

## Rules

- input: non-zero length string
- output: first non-repeated character in a string
- all unique: return the first character of the string
- no unique: return `null`

## Backlog

## Legend

- 🟩 TODO
- 🚧 IN PROGRESS
- ✅ DONE
- ❌ ERROR


### Pomodoro 1 🍅:

- initial setup
  - update README ✅
  - update NOTES ✅
  - update package.json ✅
  - update code/test files ✅
- domain description ✅
- perform the 'canary' test just to check if the structure works ✅
- it should return null for empty string ✅
- it should return the input string if length equal to 1
  - it should return 'a' for input 'a' ✅
- it should count the char frequencies
  - auxiliary function getCharFrequency will return a map with the char letters 🚧

### Pomodoro 2 🍅:

- it should count the char frequencies
  - auxiliary function getCharFrequency will return a map with the char letters 
  - it should return {t: 2, e: 3, r: 1} for input "teeter" ✅
  - it should return {a: 2, b: 2, c: 2} for input "abccba" ✅
- it should return 'e' for input 'test' ✅
- it should return 'r' for input 'teeter' ✅
- it should return 't' for input 'trend' ✅
- it should return null for input 'aabbcc' ✅