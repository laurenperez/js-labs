/*
  For Each:
  Use the .forEach iterator to loop over the following array of foods and say you like them.
*/
 
let foods = ["pizza", "tacos", "ice cream"];

foods.forEach(function(foodThing) {
  console.log("I like " + foodThing);
});

// Output:
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"