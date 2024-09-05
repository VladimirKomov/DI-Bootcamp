// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

function isAnagram(firstSrt, secondSrt) {
    firstSrt = cleanString(firstSrt);
    secondSrt = cleanString(secondSrt);

    if (firstSrt.length !== secondSrt.length) {
        return false;
    }

    const chars = {};
    for (let char of firstSrt) {
        chars[char] = chars[char] ? chars[char] + 1 : 1;
    }

    for (const char of secondSrt) {
        //0 and undefined return false
        if (!chars[char]) {
            return false;
        }
        chars[char]--;
    }
    return true;

}

function cleanString(str) {
    return str.replace(/\s/g, '').toLowerCase();
}

console.log(isAnagram('Astronomer', 'Moon starer'));
console.log(isAnagram('School master', 'The classroom'));
console.log(isAnagram('The Morse Code', 'Here come dots'));
console.log(isAnagram('The Morse Coda', 'Here come dots'));