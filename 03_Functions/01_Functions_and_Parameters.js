function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}

addTwoNumbers(17, 27);

function addTwoNumberss(number11, number22) {
    console.log(number11 + number22) // IT WILL PRINT RESULT
}

const result = addTwoNumberss(3, 4)
console.log(result) // It will give undefined because function in not returning 


function addTwoNumbersss(number12, number23) {
    let results = number12 + number23;
    return results;
    console.log("Moeez") // It will not print because according to definition of function nothing will execute after returnfuntion
}

const results = addTwoNumbersss(3, 4)
console.log("Result:", results) // It will give undefined because function in not returning 

function loginUserName(username){
    return `${username} just logged in`
}

//loginUserName("Moeez") // Most user make mistake at this point they expect output without using console in next line it will give result by using console

console.log(loginUserName("Moeez"))
