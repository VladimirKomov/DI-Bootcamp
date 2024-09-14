import {getEmojiCategories, getEmojisByCategory} from "./apiService.js";

// Functions that handles the game logic
export async function getGameCategories() {
    const categories = await getEmojiCategories();
    return categories;
}

export async function getGame(category) {
    try {
        // Fetch the emojis for the selected category
        const emojis = await getEmojisByCategory(category);

        const selectedEmojis = [];
        // Select 9 random emojis from the fetched list
        while (selectedEmojis.length < 9) {
            const randomIndex = Math.floor(Math.random() * emojis.length);
            const emoji = emojis[randomIndex];
            // Ensure no duplicates are selected
            if (!selectedEmojis.includes(emoji)) {
                selectedEmojis.push(emoji);
            }
        }

        // Pick one of the 9 emojis as the correct answer
        const correctEmoji = selectedEmojis[Math.floor(Math.random() * selectedEmojis.length)];
        const description = extractStr(correctEmoji.slug);
        // Return an object containing the emojis, description, and the correct emoji's slug
        return {
            emojis: selectedEmojis.map((emoji) => ({ character: emoji.character, slug: emoji.slug })),
            description: description,
            correctSlug: correctEmoji.slug
        };
    } catch (error) {
        throw new Error('Error getting emojis.');
    }
}

// api returns the numbers at the beginning of the line, cut them off
function extractStr(str) {
    const match = str.match(/\d[^a-zA-Z\d](?!.*\d)/);
    console.log(match);
    console.log(str);
    if (match) {
        const myStr = str.slice(str.indexOf(match[0]) + match[0].length);
        console.log(myStr);
        return myStr;
    }
    return str;
}

