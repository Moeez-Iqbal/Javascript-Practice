let score = "33abc";

console.log(typeof score)
console.log(typeof (score)); // It will give string type

// 33 => 33
// "33abc" => NAN 

let valueInNumber = Number(score) //It will convert it in number 
console.log(typeof valueInNumber); //It wll give number type
console.log(valueInNumber); //It will give NAn (not a number) because we used "33abc" it is not coverting exactly

let loggedIn=1;

let booleanIsLoggedIn=Boolean(loggedIn)
console.log(booleanIsLoggedIn);