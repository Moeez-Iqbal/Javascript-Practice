// Primitive DataType : They  are call by values

// 7 Types : String, Number, Boolean, Null, UnDefined, Symbol, BigInt
// It is Dynamically Typed language

const score = 100
const scoreValue = 100.3 // Both score and scoreValue will be considered Number in javascript in this language their is not special type for decimal it will store as number

const isLoggedIn = false
const outsideTemp = null // Null means empty not zero
let userEmail; // It is undefined can be write as userEmail=undefined

const id = Symbol('123')
const anotherId = Symbol('123') // Both will give unique return type if when the value were same they will still give different return Type 

console.log(id === anotherId);

const bigNumber = 3456765677n // BigInt n will tell long Number

// Reference Type (Non-Primitive)

// Array, Object, Functions

const superHeroes = ["Superman", "Spiderman", "Batman", "Ironman"]; // Array

let myObj = {   // Object
    name: "Moeez",
    age: 21,
    email: "moeeziqbalmughal@gmail.com"

}

const myFunction = function () { // Simple Function
    console.log("Hello World");
}

myFunction() // calling Function

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof superHeroes);
console.log(typeof myObj);
console.log(typeof myFunction); // Function Object is its type but it will show only function in type of