// +++++++++++++++++++  Numbers ++++++++++++
const score = 27

const balance = new Number(100) //another method of declaring number diff will in console
console.log(score);
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // example cater precision value in ecommerce website

const otherNumber = 174.9733
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString()); // It will give commas between amount

// ++++++++ MATHS ++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4))// abs changes only negative value into positive
console.log(Math.round(5.8888));
console.log(Math.ceil(5.8888)); // It will round off above .5 like 5.5 to 6
console.log(Math.floor(5.9))// It will round off below .5 like 5.5 to 5
console.log(Math.min(4, 8, 9, 2, 6)) // It will print minimum value
console.log(Math.max(4, 8, 9, 2, 6)) // It will Print Maxmimum Value
console.log(Math.random());// It will generate random Number between 0 and 1
console.log(Math.random() * 10); // It will shift one value towards left of point 
console.log(Math.floor(Math.random() * 10) + 1); // It will shift one value towards left of point and add 1 to counter  0.0 if it only generates zero floor will round off it and give single value

const min = 10
const max = 20
// formula

console.log(Math.floor(Math.random() * (max - min + 1)) + min)




