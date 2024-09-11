// const url = 'https://jsonplaceholder.typicode.com/users';

export async function getData(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw Error('Not Found');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error getting users", error.message);
    }
}

