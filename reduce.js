/* 
  Write something that takes the above array and returns the product of all the numbers
  via multiplication.
*/


let numbers = [1, 56, 2, 4, 1, 99, 3, 5];

let product = function(a,b){
  return a * b;
};

let multiply = numbers.reduce(product);

console.log(multiply);

// Output: 
// 665280
