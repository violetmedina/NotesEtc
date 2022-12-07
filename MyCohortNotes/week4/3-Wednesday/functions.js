

// function someFunctionName(n1, n2){
//     return n1 + n2
// }

// let result = someFunctionName(3, 4)

// console.log(result);


// function fun2(num1, num2){

//     let sum = n1 + num2;
// }

// let result = fun2(3, 4)

//? function declaration 
// Hoisting can call a function before it's declared but only when using the keyword 'function' - not recommended overall but has specific uses

// let size = area(5, 6)

// function area(width, height){

//     return width * height;

// }

// function expression and anonymous function

// let area = function(width, height){

//     return width * height;

// };

// let size = area(5, 6)

//? self invoking function aka immediately invoked function expression


// (function(){

//     console.log('hello world');

// })() // 2nd set of params is argument list


// (function(n1, n2){

//     console.log(n1 + n2);

// })(2, 3)


// let a = 5;
// let b = a; //this is a brand new copy (pass by value)

// b = 6

// console.log(a);
// console.log(b);

// -------------

// let a = [1, 2, 3, 4, 5]
// let b = a;  //this is a copy of address (pass by reference) bc of array
// let b = [...a] //spread operator gives new copy of an array (like copy in python)

// functions can be passed by reference as well

//scoping

// function testFunction(){

//     let hello = "hello world"

// }

// console.log(hello) //will get an error bc can't see inside function

// constant

// const pi = 3.14;  //cannot change value

// const arr = []  //can change the values but can't change the data type but can add or remove variables

// let is considered a block scope variable, will release the value and it will reset to whatever it was before the block of code was run



//? anonymous functions (assigned to a variable) and callbacks 

// let add = function(n1, n2){
//     return n1 + n2;
// }


// let subtract = function(n1, n2){
//     return n1 - n2;
// }


// let multiply = function(n1, n2){
//     return n1 * n2;
// }

// let calc = function(num1, num2, callback){  //callback is a function, can name it whatever, but it's title is callback
    
//     return callback(num1, num2)
// }


// let result = calc(5, 6, add) //can pass a function as an argument in JS

//?Array.forEach

// let arrA = [1, 2, 3, 4, 5]

//typical for loop, where dummy value is the index value

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// arrA.forEach(function(val){
//     console.log(val);
// })

//loop for array to pull each variable and not the index (like for loop in python)

// arr.forEach(function(){

// })

let arrB = [1, 2, 3, 4, 5]

//? Array.map()

let newArr = arrB.map(function(el){
    return el * 2
})

console.log(arrB);
console.log(newArr);