// ++++++++++++ Array  ++++++++++

const myArr = [0, 1, 2, 3, 4, 5]

const myHeroes = ["Superman", "Batman", "Spiderman", "Ironman"]

const myArr2 = new Array(1, "Moeez", 2, "Iqbal") // anotherway of declaring Array

console.log(myArr[2]);
console.log(myHeroes);
console.log(myArr2);


// +++++++++++++++++++ Array Methods +++++++++++++

myArr.push(6) // Add new element to the last
myArr.push(7)
console.log(myArr);

myArr.pop() // Remove element from the Last
console.log(myArr);

myArr.unshift(0) // Add element to the start
console.log(myArr);

myArr.shift()
console.log(myArr); // Remove element from the start

console.log(myArr.includes(9)); // Questions wether 9 is available in array or not 
console.log(myArr.indexOf(3)); // Questions what is at index [?]

const newArr = myArr.join() // Convert array in string
console.log(myArr);
console.log(newArr);
// to check what's change occur after using join used typeof
console.log(typeof myArr);
console.log(typeof newArr);

// Important Methods Slice and Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // Return section of an array to start from index 0 and to below index 3
console.log(myn1);
console.log("b", myArr);

const myn2 = myArr.splice(1, 3) // Remove Portion from original array 
console.log("C", myArr);
console.log(myn2);