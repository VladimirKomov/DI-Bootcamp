import { fetchData } from '../controllers/dataService.js';
import dotenv from 'dotenv';

dotenv.config();
const EMOJI_API_KEY = process.env.EMOJI_API_KEY;
const URL = process.env.EMOJI_API_URL;

export async function getEmojiCategories() {
    const fillUrl = URL + '/categories' + '?access_key=' + EMOJI_API_KEY;
    console.log('Categories request: ' + fillUrl);
    return await fetchData(fillUrl)
}

export async function getEmojisByCategory(categoryName){
    const fillUrl = URL + '/categories/' + categoryName + '?access_key=' + EMOJI_API_KEY;
    console.log('Emojis by category request: ' + fillUrl);
    return await fetchData(fillUrl);
}





