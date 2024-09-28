const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = "https://api.pexels.com/v1";

export const fetchImages = async (query='nature', perPage= 30, page= 1) => {
    const fillUrl = `${BASE_URL}/search?query=${query}&per_page=${perPage}&page=${page}`;
    if (!API_KEY) {
        throw new Error('Missing Pexels API Key');
    }
    const response = await fetch(fillUrl, {
        headers: {
            'Authorization': API_KEY
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched data from ', fillUrl, 'response=', data);
    return data.photos;
}
