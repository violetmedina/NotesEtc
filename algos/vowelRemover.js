
function shortcut(string) {
    let noVowel = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "a") {
            null;
        }
        else if (string[i] == "e") {
            null;
        }
        else if (string[i] == "i") {
            null;
        }
        else if (string[i] == "o") {
            null;
        }
        else if (string[i] == "u") {
            null;
        }
        else noVowel += string[i];
    }
    return noVowel;
}

shortcut("Hello")


// David's Solution
function shortcut(string) {
    // Create variables
    let vowels = ["a", "e", "i", "o", "u"];
    let res = ""
    // loop through the string to see each letter
    //   for(let stringIndex = 0; stringIndex < string.length; stringIndex++){
    //     if(!vowels.includes(string[stringIndex])){
    //       res += string[stringIndex];
    //     }
    //   }
    for (let theLetter of string) {
        // If the letter from the loop is NOT a lowercase vowel
        if (!vowels.includes(theLetter)) {
            // I need to add the letter I’m interested in to the string that’s holding all of my interesting letters.
            res += theLetter;
        }
    }
    // return res
    return res
}