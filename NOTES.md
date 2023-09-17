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
- all unique: return the frist character of the string
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