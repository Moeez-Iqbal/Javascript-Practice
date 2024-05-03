// Stack and Heap

// Stack Memory is used in Primitive DataTypes means The value stored in stack memory will give its copy
// Example

let myYoutubeName = "Moeez Iqbal"
let anotherName = myYoutubeName  // It is storing copy of value of myyotubename not original value that's why anothername value is changed in next lne and myyoutubename has it's original value saved as you knoe stack in LIFO process (Last In First Out)
anotherName = "Moix Iqbal"
console.log(myYoutubeName);
console.log(anotherName);

// Heap Memory is used in  non Primitive DataTypes means The value stored in heap will give its reference(Address)

let userOne = {
    email: "moeeziqbalmughal@gmail,com",
    upi: "moeez@bl"
}
// Userone is stored in heap and when we call user two it has been given reference from heap into stack and when we changed value of userTwo it will change it's value in userOne as well because it is not using copy it is using reference
// It will Clear from ScreenShot

let userTwo = userOne

userTwo.email = "Moizzz@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);