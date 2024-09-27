import quotes from "./QuotesDatabase.js";
import * as console from "node:console";

// quotes for output
let leftQuotes = [...quotes];

const colorSchemes = [
    { backgroundColor: 'red'},
    { backgroundColor: 'DeepPink'},
    { backgroundColor: 'coral' },
    { backgroundColor: 'Violet' },
    { backgroundColor: 'Brown' },
    { backgroundColor: 'Fuchsia' },
    { backgroundColor: 'Green' },
    { backgroundColor: 'Blue' },
    { backgroundColor: 'Navy' },
    { backgroundColor: 'Gold' },
    { backgroundColor: 'OrangeRed' },
    { backgroundColor: 'Indigo' },
    { backgroundColor: 'SaddleBrown' },
    { backgroundColor: 'Black' }
];

export const getRandomQuote = () => {
    // if the quotes are over, we start over
    if (leftQuotes.length === 0) {
        leftQuotes = [...quotes];
    }
    const randomIndex = Math.floor(Math.random() * leftQuotes.length);
    const quote = leftQuotes[randomIndex];
    // we delete quotes as they are displayed
    leftQuotes.splice(randomIndex, 1);
    return quote;
}

export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorSchemes.length);
    const colorScheme = colorSchemes[randomIndex];
    return colorScheme;
}
