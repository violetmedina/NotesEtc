
// if given an array of numbers from 1-100 with one number missing,
// can you write an algo to find the missing number? Could be varying length.
// Will always go in order. Positive/Neg not important.

// sort the array
// loop through array
// compare one number to the next number to see if the result is 1
// if result isn't 1 output the current index -1?

arr = [
    1,  2,  3,  4,  5,  6,  7,  8,  9,  10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100
]

// This “pointer” is keeping track of the current index and I will move it through the array myself instead of allowing it to iterate.
// This gives me more control over when I want to move forward in an array and is often used when I’m playing array games with higher/lower values.
function findMissingNumber(arr, beginning, ending) {
    let currentIndex = 0;
    for (let i = beginning; i <= ending; i++) {
        if (i == arr[currentIndex]) {
            currentIndex++;
            // console.log("currentIndex", currentIndex)
        } else {
            console.log("missing number:", i)
        }
    }
}

findMissingNumber(arr, 1, 100)

//can use binary search to make this faster