let a = 27


if (true) {
    let a = 10 // This is only inside scope
    const b = 20 // This is also inside scope
    var c = 30 // can be accessible inside and outside of scope which cause proble
    console.log("Inside Scope: ", a);
}


{} // Scope

console.log(a)
//console.log(b)
console.log(c)