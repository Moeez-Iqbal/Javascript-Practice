function calculateCartPrice(...num1) { // This ... Operator is used as rest and spread operator depending on case it will make our console to print more than one value in argument and print in the form of array in this case it acting as rest operator
    return num1
}

console.log(calculateCartPrice(200, 800, 1000, 500, 200))

function calculateCartPrices(Val1, val2, ...num1) { // This ... Operator is used as rest and spread operator depending on case it will make our console to print more than one value in argument and print in the form of array in this case it acting as rest operator
    return num1
}

console.log(calculateCartPrices(200, 800, 1000, 500, 200)) // by usng val it will print 1000 ,500, 200 beacuse other are stored  in val1 and val2 respectively and it's a interview concept

const user = {
    username: "Moeez",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user);

handleObject({ // This will pass new object in function
    username: "Taha",
    price: 200
})

const myNewArray=[17, 27, 2002, 2004, 2027]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log("The Second value in array is :",returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 500, 900]))

// In shallow memory address remain same but value will be changed
// In deep memory it will create copy 