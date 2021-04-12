/*
  For Each:
  Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
 */
 
 var foods = [
  {name: "Pizza", level: "very"},
  {name: "Oatmeal", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

foods.forEach(function(item){
  console.log(item.name + " is " + item.level + " delicious.");
});

// Output:
// > Pizza is very delicious
// > Oatmeal is mostly delicious
// > Cottage Cheese is not very delicious