// Contructor and Singleton

const tinderUser = new Object ()

  tinderUser.id =  "123abc"
  tinderUser.name = "Tom"
  tinderUser.isLoogedIn = false    // This is singleton

console.log(tinderUser);

const regularUser =  {
    email:"moeez@gmail.com",
    fullname: {
          userFullName: {
            firstname: "Moeez",  // complex obJect
            lastname:"Iqbal"
          }
    }
}

console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1: "a", 2: "b", 3: "c", 4: "d"}
const obj2 = {5: "a", 6: "b", 7: "c", 8: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);   It's a way but we use less

// another way is
const obj3 = {...obj1, ...obj2}
console.log(obj3);

// DataBase Example

const users = [
    {
        id: 1,
        email: "m@gmail.com",

    },
    {
        id: 2,
        email: "k@gmail.com",

    },
    {
        id: 3,
        email: "t@gmail.com",

    }
]

console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // It's dataType is Array

console.log(Object.entries(tinderUser)); // Array with in a array every key and value is an seperate array in one main array

console.log(tinderUser.hasOwnProperty('isLoogedIn')); // tell wether value exists or not