function findMissingNumbers(arr) {
    // Check to see if the array has a length of zero or one. In both those cases, I don’t have elements between, so I’ll go ahead and just return an empty array.
    if (arr.length <= 1) {
        return [];
    }
    // This “pointer” is keeping track of the current index and I will move it through the array myself instead of allowing it to iterate.
    // This gives me more control over when I want to move forward in an array and is often used when I’m playing array games with higher/lower values.
    let currentIndex = 0;
    let theMin = arr[0];
    let theMax = arr[arr.length - 1];
    let res = [];
    for (let i = theMin; i <= theMax; i++) {
        if (i == arr[currentIndex]) {
            currentIndex++;
        }
        else {
            res.push(i);
        }
    }
    return res
}


// Aleisha

function findMissingNumbers(arr) {
    let missingNumbers = [];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}
//Tigran

function findMissingNumbers(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let prevVal = arr[i - 1];
        if (currentVal - prevVal != 1) {
            let difference = currentVal - prevVal;
            for (let j = 1; j < difference; j++) {
                result.push(prevVal + j);
            }
        }
    }
    return result;
}