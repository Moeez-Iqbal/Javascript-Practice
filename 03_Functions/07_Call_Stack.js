// JavaScript Execution Context

// 1. {} --> Global Execution --> this 
// 2. Function Execution Context
// 3. Eval execution Context not necessary it is also cn be include in global


// {} --> Memory Creation Phase in this phase allocate space and memory for variable etc
// next is Execution Phase

let val1 = 10
let val2 = 5

function addTwo(num1, num2) {
    let total = num1+num2
    return total
}

let result1 = addTwo(val1, val2)
let result2 = addTwo(10, 8)

// +++ Steps for execution of This Program

//1. Create Global Execution and Locate it in this
//2. Memory Creation Phase Stored undefined in all variables e.g (val1 val2 = undefined) addTwo (Goes Function definition) resul1 and result2 = undefined this is 1st cycle happens in every code

//3. Execution Pahse val1=10 val2=5 then move to Result and init call addTwo and then addtwo function create it's new execution context and then 1st cycle happens again but in the function and program executes

// Practice Source  of Console