// There are two ways of declaring objects in js
// a: Literal   b:Constructor    another is : singleton

// Singleton is made using contructor when asked in Interview  havev to say when it is declared like literals it will not be singleton When it is made or declared with constructor it will become singleton

// Objects Literals
//Object.create  another method also it is made using constructor

const mySym = Symbol("Key1")

const jsUser = {
    name: "Moeez",
    "full name": "Moeez Iqbal",
    [mySym]: "Key1",  // If we not use [] it will not act as symbol it will act as string because string is stored init in interviews they asked to use symbol as key so have to remembere to use[] and when accessing use [] 
    age: 21,
    location: "Lahore",
    email: "moeeziqbamughal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email) // It's a way but not Preferebale because in next line
//console.log(jsUser["full name"]);  Try writing full name will get answer
// console.log(jsUser[email])  It will Through error because system knows that email is string so have to write in quotations
console.log(jsUser["email"]) //It's  a Preferable way
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);


jsUser.email="moixiqbal@gmail.com" // You can change value like this
//Object.freeze(jsUser)
jsUser.email="moeeziqbalmughal@gmail.com" // These will not change because object is freeze
jsUser.name="Moix"
console.log(jsUser);

jsUser.greetings = function(){
    console.log(" Hello js User")
}

console.log(jsUser.greetings);
console.log(jsUser.greetings()); //It is giving array because we freeze object remove and run it will run

jsUser.greetings2 = function(){
    console.log(`Hello Js User ${this.name}`)
}
console.log(jsUser.greetings2);
console.log(jsUser.greetings2());