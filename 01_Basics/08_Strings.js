const name = "Moeez "
const repoCount = 4

console.log(name + repoCount + " Value"); // This Method is not preferable

console.log(`Hello may name is ${name} and my RepoCount is ${repoCount}`); // This is Preferable Method

// Another Method of Declaring String 

const gameName = new String('Moeez') // Check It's value in browser's Console Sring is ObJect in this way
console.log(gameName)
console.log(gameName[2]);
console.log(gameName.__proto__); // It will give {} which means object
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('o'))

// String Methods

const newString = gameName.substring(0, 4) // It will give char from 0 to 4
console.log(newString);

const anotherString = gameName.slice(2, 3)  // It can take negative values and it will reverse  read MDN
console.log(anotherString);

const newStringOne = "      MOIZZZZ      "
console.log(newStringOne);
console.log(newStringOne.trim()); // It will remove spaces

const url = "https://moeez.com/moeez%20iqbal" // It will replace %20 with -
console.log(url.replace('%20', '-'))

console.log(url.includes('moeez')); // It will tel wether moeez string are used in url or not

console.log(gameName.split('')); // It will split further explanation in MDN
