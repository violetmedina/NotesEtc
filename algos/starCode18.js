
function strCount(str, letter) {
    // Create a variable
    let count = 0;
    // Loop through the word
    for (let theLetter of str) {
        // If the letter in the string == the letter given in the variable letter.
        if (theLetter == letter) {
            // Add 1
            count++;
        }
    }
    // Return the count
    return count;
}