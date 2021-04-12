/* 
  Implement Fizz Buzz. Loop from 1 to 100. If the number if divisible by 3, 
  print "fizz". If the number is divisible by 5, print "buzz". If the number is divible by 
  both 3 and 5, print "fizzbuzz". If none of the above are true, print the number. 
*/

for (let i = 0; i <= 100; i++){
  if (i%3 === 0 && i%5 === 0) {
      console.log("Fizz Buzz");
    } else if (i%3 === 0) {
      console.log("Fizz");
    } else if (i%5 === 0) {
      console.log("Buzz");
    } else{
      console.log(i);
    }
}