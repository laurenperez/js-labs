/*
  PROBLEM 1
  
  Write  function that takes a string of space separated numbers, and returns the highest and lowest number.
  Example:
    highAndLow(“1 2 3 4 5”); // return “5 1"
    highAndLow(“1 2 -3 4 5”); // return “5 -3"
    highAndLow(“1 9 3 4 -5”); // return “9 -5"
    highAndLow(“1 1”); // return “1 1"
*/

/*
  Edge case notes:
  There will always be at least one number in the input string.
  Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow (string){
let split = string.split(" ");
let arr = [];
split.forEach(function(num) {
  arr.push(+num);
})
return Math.max(...arr) + " " + Math.min(...arr);
}

highAndLow("1 2 3 4 5");


// 2nd Solution

function highAndLow(string) {
  let split = string.split(" ").sort();
  return split[split.length-1] + " " + split[0];
}

highAndLow("1 2 3 4 5");


/*
  PROBLEM 2

  You probably know the “like” system from Facebook and other pages. People can “like” blog posts, pictures or other items. 
  We want to create the text that should be displayed next to such an item.
  Implement a function likes([Strings]) which must take in input array, 
  containing the names of people who like an item. It must return the display text as shown in the examples:
  likes( [] ) // must be “no one likes this”
  likes( [“Peter”] ) // must be “Peter likes this”
  likes( [“Jacob”, “Alex”] ) // must be “Jacob and Alex like this”
  likes( [“Max”, “John”, “Mark”] ) // must be “Max, John and Mark like this”
  likes( [“Alex”, “Jacob”, “Mark”, “Max”] ) // must be “Alex, Jacob and 2 others like this”
  For more than 4 names, the number in “and x others” simply increases.
*/


function likes(arr) {
  if (arr.length < 1) {
    return "no one likes this";
  } else if (arr.length = 1) {
    for (let i = 0; i < arr.length; i++) {
      return arr[0] + " likes this";
    }
  } else if (arr.length = 2) {
    for (let i = 0; i < arr.length; i++) {
      return arr[0] + " and " + arr[1] + " likes this";
    }
  } else if (arr.length = 3) {
    for (let i = 0; i < arr.length; i++) {
      return arr[0] + ", " + arr[1] + ", and " + arr[2] + " like this";
    }
  } else if (arr.length > 3) {
    for (let i = 0; i < arr.length; i++) {
      return arr[0] + ", " + arr[1] + ", and " + arr.length-2 + " others like this";
    }
  }
}

likes(['Alex', 'Jacob', 'Mark', 'Max']);
