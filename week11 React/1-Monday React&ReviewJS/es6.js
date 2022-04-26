
//? Ternary Operators

let age = 16;

// if(age < 18) {
//     console.log('too young to vote')
// }
// else {
//     console.log('old enough to vote');
// }

// let voteable = (age < 18) ? 'too young to vote' : "old enough to vote";
// console.log(voteable);

//?Spread Operators

// let arr = [4, 5, 6, 7, 8, 9, 10]

// let arrb = [...arr];
// arrb[0] = 99;
// console.log(arr);
// console.log(arrb);

// let a1 = [1, 2, 3]
// let a2 = [4, 5, 6]
// let a3 = [...a1, ...a2]
// console.log(a3);

//? Destructuring

// const student = {
//     ID: '21',
//     Name: 'John',
//     GPA: '3.0',
//     City: 'Houston'
//     };


// let {ID, name, GPA, city} = student;

// console.log(ID);
// console.log(Name);
// console.log(GPA);
// console.log(City);

//? Destructuring Arrays

// let cities = ["Atlanta", "Philly", "Houston", "Kansas City"]

// let [city1, city2, city3, city4] = cities

// console.log(city1, city2, city3, city4);

//? Maps

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let times2 = nums.map(myFunction)

// function myFunction(num) {
//     return num * 2;
// }

// console.log(times2);

//? Filter (rating of 7 or more)

// const movies = [
//     { id: 'tt0113243', title: 'Hackers', releaseDate: '1995-09-15', rating: 6.2 },
//     { id: 'tt0244244', title: 'Swordfish', releaseDate: '2001-05-11', rating: 6.5 },
//     { id: 'tt0086567', title: 'WarGames', releaseDate: '1983-06-03', rating: 7.1 },
//     { id: 'tt0133093', title: 'The Matrix', releaseDate: '1999-03-24', rating: 8.7 },
//     { id: 'tt0151804', title: 'Office Space', releaseDate: '1999-02-19', rating: 7.7 },
//     ]

// const highRating = movies.filter(x => x.rating > 7)

// console.log(highRating);

//? OOP in JS

class Student {

    // constructor (init in python)
    constructor(name, city){
        this.name = name;
        this.city = city;
    }

    greeting(){  // <-- methods don't need a function keyword
        console.log(`My name is ${this.name} and I live in ${this.city}.`);
    }
}

let dez = new Student("Dez", "Atlanta")
dez.greeting()

let tri = new Student("Tri", "Philly")
tri.greeting()

let gary = new Student("Gary", "Atlanta")
gary.greeting()
