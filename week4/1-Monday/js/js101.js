
// console.log("inside of external JS file")

// document.body.innerHTML = "Hello World"

//? Multi line print statement

// console.log(`
// hey this is a
// multi line 
// print statement`
// )

// //? concatenation

// console.log('hello' + ' world')

//? function

// let name = "George"

// console.log(name.length)

//? let, var, const

// let a = 4;
// let b = 4.5;
// let c = a + b;
// console.log(c)

// let s = 'a'

//? string operators

// let greeting = "Hello World"

// console.log(greeting.length) // length of hello world

// let index = greeting.indexOf('World')

// console.log(index) //the index of where world starts in greeting

//? true false

// console.log(!true)

// console.log(2 >= 2)

//? if statement

// if (2 >= 1){
//     console.log('hello')
// }


// let age = 21

// if (age >= 21){
//     console.log('free beer')
// }
// else if(age < 18){
//     console.log("what are you doing here?")
// }
// else{
//     console.log('no beer for you')
// }

//? switch statement

// let day = "Monday"

// switch(day){
//     case "Monday":
//         break;
//     case "Tuesday":
//         break;
//     default:
//         console.log("Default Stmt")
//         break;
// }


//? while loop

// let count = 0;

// while (count < 10){
//     console.log(count)
    // count += 1 // can add more than one
//     count ++; // always adds just one
// }

//? for loop

// for(let count = 0; count < 10; count++){

// }

//? new array (Python is the only one that calls this a list, array in every other language)

// let myList = [2, 3, 4, 5, 6]

// myList[3] // gives index of position in array

// //? push = append

// myList.push(99) // adds 99 to the end of the above array

// let lastElement = myList.pop() // pop same as in python

// myList[0] = 99 // same as in python


//? removing an element from the beginning of an array

// let shiftedVal = myList.shift()

// console.log(shiftedVal)

//splice

// let myList = [2, 3, 4, 6, 7, 8]

// if we want to remove variables from the list

// //? splice is a mutating method, it will not only return the values but it will remove them from the original array

// let splicedVals = myList.splice(2, 2)  // this is going to return 4 and 6 - value is returned as an array

// myList(2, 3) // will splice out the next 3 elements starting at the index (index, amount of elements to return)

// console.log(splicedVals)

// //? slice will return the value but WILL NOT modify the original array (non-mutating)
// //? if you take out the 'p', splice turns to slice

// let sliceArr = myList.slice(3, 4)

// let word = "hello"

// for(let i = 0; i<word.length; i++){
    
//     console.log(word[i])
// }

// if we want to return it backwards 'olleh'

// let reverse

// for(let i = word.length - 1; 1 >= 0; i--){
//     reverse += word[i]
//     console.log(reverse)
// }

//using built in method, converting into an array
// using a function called split, converting a string to an array

// let word = "hello"

// let charArr = word.split('')

// console.log(charArr); //arr = ['h', 'e', 'l', 'l', 'o']

// charArr.reverse()

// console.log(charArr);

// let revWord = charArr.join('')

// console.log(revWord)

/////

// let sentance = "This is a great day!"

// let sentArr = sentance.split('')

// console.log(sentArr)

// let sentRev = sentArr.join('')

// console.log(sentRev);

//? JS Object is = dictionary in python

// let someDisctionary = {
//     firstName : "Jane"
//     lastName : "Doe"
//     age: 34
// }

// both are valid ways to pull the data 

// someDictionary["age"] //34 - the only reason to use this is if the key has a space in a string, then this is the only way

// someDictionary.age //34

//? get all keys from dictionary as an array

let keys = Object.keys(someDictionary) // returns an array of all the keys of someDictionary

//now that it is an array (keys is an array), can loop through array

    for(let i = 0; i<keys.length; i++){
    console.log(keys[i], someDictionary[keys[i]])
}

// function

function add(num1, num2){
    return num1 + num2
}

let result = add(4, 5)

console.log(result)

// working our way to:

// const add = (num1, num2) +> num1 + num2;
