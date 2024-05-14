// This Keyword Tells about Current Context

const user = {
    username: "Moeez",
    subscription: 1000,

    welcomeMessage: function () {
        console.log(`${this.username}, welcom to website`);
        //console.log(this) It will give current context
    }

}

user.welcomeMessage()
user.username ="Taha"
user.welcomeMessage()

//console.log(this); it will give empty object because it is outside of scope but in console it will give window global object


function sub(params) {
    username = "Moeez"
   // console.log(this.username); Wil give undefined because of This canbe used in object function 
   console.log(this);
}
sub()

const add = function (params) {
    username = "Moeez"
   // console.log(this.username); Wil give undefined because of This canbe used in object function 
   console.log(this);
}
add()

//+++++++++ Arrowfunction ++++++++++++

const mul = () => {
    const username = "Taha"
    console.log(this.username);
    console.log(this);
}

mul()

const addtwo = (num1, num2) => {
  return num1+num2
}
console.log(addtwo(5,8))

// another way

const addThree = (num1, num2) =>  num1+num2 // don't use return curly brackets not used

console.log(addThree(6,9));

// another way
const addFour = (num1, num2) =>  (num1+num2) // don't use return if parenthesis brackets are used

console.log(addFour(9,88));

const addFive = (num1, num2) =>  ({username: "Moix"}) // for returnin obj

console.log(addFive(9,88));


