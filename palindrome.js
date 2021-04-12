/* 
  Palindrome - one of many ways
  Write a function called isPalindrome that accepts a string
  and returns true if the string is a palindrome, 
  and returns false if the string is not. 
*/

let word = "racecar"

let isPalendrome = function(word){
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length-1-i]) {
      return false
    }
  }
  return true
}

console.log(isPalendrome(word))