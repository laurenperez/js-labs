/*
  Probelem #1 
  using set interval write a function that prints your name once every second.
*/

let myName = function(){
  console.log("Lauren");
};

setInterval(myName, 1000);

// or 

function annoy() {
  console.log('Are we there yet?');
}

let oneSecondInterval = setInterval(annoy, 1000);



/*
  Problem #2
  I need to know what 7 times 15 is or the world will explode,
  but if you tell me what that equals any time in the next ten seconds 
  I'll use my laser powers to melt your face. Is there a function you 
  can write to solve both of these impossibly specific problems?
*/

setTimeout(function(){
  let a = 7;
  let b = 15;
  console.log(a*b);
}, 11000);



/* 
  Problem # 3
  use set interval to make a number count up to 5 and use 
  a setTimeout to clear that set interval after a while.
*/

let num = 0;

myVar = setInterval(function(){
  console.log(num);
  num += 1;
}, 1000);

setTimeout(function(){
  clearInterval(myVar)
},7000)