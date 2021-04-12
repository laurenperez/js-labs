/*
  Write code using .map that takes an array of strings, and returns an array where each element is in all caps.
*/

let people = ['Harry', 'Ron', 'Draco', 'Neville'];

people = people.map(function(person){
  return person = person.toUpperCase();
});

console.log(people);


// Output:
// [ 'HARRY', 'RON', 'DRACO', 'NEVILLE' ]


// example using toLowerCase

function process(person) {
  return person.toLowerCase();
}

console.log(people.map(process));

// Output:
// [ 'harry', 'ron', 'draco', 'neville' ]