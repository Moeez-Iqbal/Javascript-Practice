// Nested Scope

function One() {
    const username = "Moeez"

    function two() {
        const website = "Google"
        console.log(username);
    }
    // console.log(website); It will execute inside Two Because of Block scope 
    two () // It is Executing after one call if we comment it out nothing will print
}

One ()


if (true) {
    const username = "Moeez"
    if (username === "Moeez") {
        const website = "Twitter"
        console.log(username + website);
    }
    // console.log(website); outside can't be accessed
}
// console.log(username); outside can't be accessed


// ++++++++++++++++++++ Hoisting +++++++++++++++++++++++++

//addOne(6) will work work as function
function addOne(num) { // This is Function
    return num+1
}
addOne(5)   // It can be called before function creation

// addtwo(8) // wil not work because cannot be initialize before declaration as it worrking as expression Function
const addTwo = function(num){ // This is also Function But sometimes called Expression 
  return num+2
}

console.log(addTwo(6)) // will not work before function declaration 