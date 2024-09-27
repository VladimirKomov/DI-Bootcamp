const fetchData = async (filePath) => {
    try {
        const res = await fetch(filePath);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error loading file', error);
    }
};

export default fetchData;