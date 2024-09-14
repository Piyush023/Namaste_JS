// // Hoisting - 
// getName() // The function will be hoisted and will be accessible here.
// console.log(x) // This will Give Undefined becoz this is the point where the x is hoisted but the only the declaration not the initialization
// console.log(getName) // The function will be hoisted and will be accessible here.

// var x = 7
// function getName() {
//     console.log("hello")
// }

// // These both definition will not be hoisted or Arrow function - 
// var a = function () {
//     console.log('Hello')
// }

// var aFunc = () => { console.log("hello") }

// How Function Works and Block Scope of Variable - 

// var x = 1
// a()
// b()
// console.log(x)

// function a(){
//     var x = 10
//     console.log(x)
// }

// function b(){
//     console.log(this)
//     var x = 100
//     console.log(x)
// }

// Block Scope and Shadowing - 

// var a = 100
// let b = 200
// // Block Scope - 

// //  All this will happen only in case of the if Block and this all is not possible in case of the functions - 
// if(true){
//     var a = 10
//     let b = 20
//     // console.log(a) // These Both will output 10 becoz a is always in Global Scope and Updated the Value of a already stored value to 10.
//     console.log(b) // Now this will print different output each statement becoz the let does not get shadow. - Here it will output 20 Becoz this is Block Scope and not in Global Scope.
// }
// // console.log(a) // These Both will output 10 becoz a is shadowed and the value of a is updated.
// console.log(b) // Now this will print different output each statement becoz the let does not get shadow. - Here it will output 200 Becoz this is Script Scope and not in Global Scope.\

// Closures - 

// function x(){
//     var a = 10;
//     function y(){
//         console.log(a)
//     }
//     return y
// }
// var z = x()
// z()

// Examples of Closures - 
// 1 - 
// function x(){
//     var a = 10;
//     function y(){
//         console.log(a)
//     }
//     a = 100;
//     return y
// }
// var z = x()
// z() // This will output 100 becoz the a is the reference ot the memory and value at that ref is 10 at declaration and closure return the value of a (Memory Reference) which is 100 at the time of return.

// 2 - 
// function z() {
//     var b = 100
//     function x() {
//         var a = 10;
//         function y() {
//             console.log(a, b) // Now due to Lexical Scope y has access to the value of both a and b here.
//         }
//         y()
//     }
//     x()
// }
// z()

// 3 - Print Value of 1,2,3,4,5 after a delay of 1 sec
// function varX() {
//     // The Only issue here is that the value of updated i is not getting passed to the setTimeOut Function.
//     for (var i = 0; i <= 5; i++) {  // Now becoz of Closures the value of i reference is also accessed by the setTimeOut but due to the global scope nature of var the value at the reference is updated at the end of the loop, while the delay is continued and the value of i at that time is accessed by the setTimeOut and the updated value is 6 and so it prints 6 each time of the iteration. Now this issue is solved by using the let becoz the let will be stored in the separate memory than the global memory.
//         setTimeout(function () {
//             console.log(i)
//         }, 1000)
//     }
// }

// // function letX() {
// //     for (let i = 0; i <= 5; i++) {  // Now this will give the correct output. 
// //         setTimeout(function(){
// //             console.log(i)
// //         }, i*1000)
// //     }
// // }

// function letX() {
//     let i = 0;
//     for (i = 0; i <= 5; i++) {
//         // console.log(i) // This Console will give the correct value and not the same value of 6 but it will give the diff value of i.
//         setTimeout(function () {
//             console.log(i) // Now this will also give the same output each time and that is 6 Becoz the value of i is block scope of the function letX and not in the block scope of the loop.
//         }, i * 1000)
//     }
// }

// // varX()
// // letX()

// To Fix this using var - 
// function fixVarX() {
//     for (var i = 0; i <= 5; i++) {
//         function close(i) {
//             // console.log(i) // This Console will give the correct value and not the same value of 6 but it will give the diff value of i.
//             setTimeout(function () {
//                 console.log(i) // Now this will also give the same output each time and that is 6
//             }, i * 1000)
//         }
//         close(i) // Now we are passing the updated value each time when i is updated to the function.
//     }
// }

// fixVarX()

// Functions - 
// 1 - Function Statement or Declaration - 
// function a(){
//     console.log("A called")
// }

// 2 - Function Expression - 
// var funcExp = function b(){
//     console.log('B called ')
// }

// Now here we can have both named Function and Anonymous Function here - 
// var funcExpAnon = function() {
//     console.log('Anonymous Function Called')
// }

// Closure Example - 
// function clickEvent() {
//     let count = 0;
//     document.getElementById('click').addEventListener('click', function click() {
//         console.log(`count - ${++count}`) // Here becoz it is a closure it will trigger on the click and will remember the count variable value on each click and also update it acc to it.
//     })
// }

// clickEvent() // Here the function invocation it will trigger the function and will store the whole function as a closure and will execute it acc to it.

// // SetTimeOut Example - 

// console.log('Start')

// setTimeout(() => {
//     console.log('Timer')
// }, 5000)

// console.log('End')

// // Delay of 10 sec - 

// const start = new Date().getTime()

// let end = start

// while (end < start + 10000) {
//     end = new Date().getTime()
// }

// console.log("While Loop Ends")

// Higher Order Function Example - 

// Prototype Example of Map - 
Array.prototype.mapNewDouble = function () {
    const arr = []
    for (var i = 0; i < this.length; i++) {
        arr.push(this[i] * 2)
    }
    return arr;
}

const arrNew = [1, 2, 3, 4, 5]
// console.log(arrNew.mapNewDouble())

// Filter - 
// console.log(arrNew.filter((i) => i < 5)) // This will return a new Array with all the values that are less than the value of 5

// Reduce - 
// console.log(arrNew.reduce(function (max, curr) {
//     if (curr > max) {
//         max = curr
//     }
//     return max
// }, 0)) // This will give a single value containing the sum of the whole array.


// Reduce Example - 
const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
];

// Need to give this Output - // acc = { 26: 2, 75: 1, 50: 1 } - Object with the no of person having that age.

// console.log(users.reduce(function (acc, curr) {
//     if (acc[curr.age]) { // We can access the object value via this too...
//         acc[curr.age] = ++acc[curr.age]
//     } else {
//         acc[curr.age] = 1 // We can update the value in the Object key via this...
//     }
//     return acc
// }, {}))

// console.log(users.reduce(function (acc, curr) {
//     if (curr.age < 30) { // We can access the object value via this too...
//         acc.push(curr.firstName)
//     }
//     return acc
// }, []))