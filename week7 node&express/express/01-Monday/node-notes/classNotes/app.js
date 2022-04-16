

let name = require('./utilities/modString');

let n = require('./utilities/num');

let math = require('./utilities/sum');  //sum here is a function because we exported a function

console.log(name);

console.log(n);

// addNums([99, 5, 6, 7, 3, 4]);

console.log(math.sum([99, 5, 6, 7, 3, 4]));
console.log(math.multiply([99, 5, 6, 7, 3, 4])); //pulling from object in sum.js to use multiple functions

let fs = require('fs'); // put all require statements at top of the page

let fileName = "preamb.txt";

let file = fs.readFile(fileName, (error, buffer)=>{
    
    if(error){
        console.log(error.message);
        return;
    }

    console.log(buffer.toString());

});

// console.log(file);