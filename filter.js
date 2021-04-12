/* 
  Write code that uses the filter function, and the below isCool 
  function to return a list of people who are cool. 
*/

let people = [
  {
    name: "Lauren",
    coolnessScore: 15.6
  },
  {
    name: "Rowan",
    coolnessScore: 23
  },
  {
    name: "Chris",
    coolnessScore: 17
  },
  {
    name: "Jordan",
    coolnessScore: 40
  }
];

let coolPeople = people.filter(function(person) {
  return person.coolnessScore > 20;
});

// OR

let isCool = function(person) {
  return person.coolnessScore > 20;
}

coolPeople = people.filter(isCool);

// to print list

coolPeople.forEach(function(person) {
  console.log( person + " is cool" );
});


// Output:
// Rowan is cool
// Jordan is cool
