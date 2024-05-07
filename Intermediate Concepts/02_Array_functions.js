const marvelHeroes = ["Thor", "Ironman", "Spiderman"]

const dcHeroes = ["Superman", "Batman", "Aquaman"]

//marvelHeroes.push(dcHeroes) Works on existing array
// console.log(marvelHeroes);
// console.log(marvelHeroes[3]);
// console.log(marvelHeroes[3][1]);

const heroes = marvelHeroes.concat(dcHeroes)  // returns new array
console.log(heroes);


const allHeroes = [...marvelHeroes, ...dcHeroes] // It will work as concat It is spread method ...Spread is prefereables
console.log(allHeroes);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = anotherArr.flat(Infinity) // work with number of arrays to convert them in on  array 

console.log(real_another_array);

console.log(Array.isArray("Moeez")) // Tell it's array or not
console.log(Array.from("Moeez")) // Convert it in Array
console.log(Array.from({ name: "Moix", age: 21 })) // using onject Provide an empty array because we have to tell wether we want arrays of keys or values Interview Questions

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Convert value of diff variables in an array