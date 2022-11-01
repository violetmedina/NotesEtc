function fizzbuzz(n) {

    let res = [];
    for (let i = 1; i <= n; i++) {
        // If it is a mutliple of both, 'FizzBuzz'
        if (i % 5 == 0 && i % 3 == 0) {
            res.push('FizzBuzz');
        }
        // If it is a multiple of 3, it’ll be 'Fizz'
        else if (i % 3 == 0) {
            res.push('Fizz');
        }
        // If it is a mutliple of 5, it’ll be 'Buzz'
        else if (i % 5 === 0) {
            res.push('Buzz');
        }
        // Otherwise, we will use the number itself.
        else {
            res.push(i);
        }
    }
    return res;
}