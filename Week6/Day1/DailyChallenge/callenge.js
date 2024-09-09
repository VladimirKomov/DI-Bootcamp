// 1 ////////////////////////////////////////////
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is
// the array of words uppercased.
//     else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is
// the array of words sorted in alphabetical order.
//     else, reject the promise with a reason.

function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        if (arr.every(item => typeof item === 'string')) {
            resolve(arr.map(item => item.toUpperCase()));
        } else {
            reject('Not all elements are string')
        }
    })
};

function sortWords(arr) {
    return new Promise((resolve, reject) => {
        if (arr.length > 4) {
            resolve(arr.sort());
        } else {
            reject('The array is too short');
        }
    })
};
//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))


// 2 //////////////////////////////////////
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
//     if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)
function toJs(str) {
    return new Promise((resolve, reject) => {
        try {
            const jsonObj = JSON.parse(str);
            if (Object.keys(jsonObj).length > 0) {
                resolve(jsonObj);
            } else {
                reject(new Error("JSON is empty"));
            }
        } catch (error) {
            reject(new Error("Unable to parse JSON"));
        }
    });
};

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
//     This function asks the user for a word or a sentence.
//     if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word
function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const userInput = prompt('A word or a sentence :').toLowerCase();
        const arr = [];
        for (let char of userInput) {
            if (!morseJS[char]) {
                reject(new Error("Char not found"))
            } else {
                arr.push(morseJS[char]);
            }
        }
        resolve(arr);
    })
}

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array
// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
function joinWords(morseTranslation) {
    return new Promise((resolve, reject) => {
        try {
            const bodyElement = document.querySelector('body');
            const div = document.createElement('div');
            const p = document.createElement('p');
            p.innerHTML = morseTranslation.join('<br>');
            div.appendChild(p);
            bodyElement.appendChild(div);
            resolve('Success');
        } catch (e) {
            reject(new Error("Wrong"));
        }
    });
}

toJs(morse)
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject));
