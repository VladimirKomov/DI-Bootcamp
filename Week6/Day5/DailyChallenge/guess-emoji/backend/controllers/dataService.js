import axios from 'axios';

// to get data from the api
export async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error('Error fetching emoji from API');
    }
}