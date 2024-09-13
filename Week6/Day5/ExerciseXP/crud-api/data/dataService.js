import axios from 'axios';

export async function fetchPosts(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error('Error fetching posts from API');
    }
}

