
// complete the function
function solution(string) {
    // Create Variables
    let res = "";
    let capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Loop through to see each letter
    for (let theLetter of string) {
        // If it is a capital letter
        if (capitals.includes(theLetter)) {
            // Add a space
            res += "";
        }
        // No matter what, add the letter
        res += theLetter;
    }
    return res;
}