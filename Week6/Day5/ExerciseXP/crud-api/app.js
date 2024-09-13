// Create a new directory named crud-api.
//     Inside the crud-api directory, initialize a new Node.js project and install the express and axios packages.
//     Create a new file named app.js in the crud-api directory.
//     In app.js, import the express module and create an instance of an Express app.
//     Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

// Inside app.js, import the dataService module you created.
//     Create an endpoint in your Express app that uses the fetchPosts function from the dataService module
//     to retrieve data from the JSONPlaceholder API.
//     Respond with the fetched data from the JSONPlaceholder API. https://jsonplaceholder.typicode.com/posts
// Print a message in the console to indicate that the data has been successfully retrieved and sent as a response.

import express from 'express';
import {fetchPosts} from "./data/dataService.js";

const app = express();
app.use(express.json());
const PORT = 5000;
const URL = "https://jsonplaceholder.typicode.com/posts";
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.get("/posts", async (req, res, next) => {
    try {
        const data = await fetchPosts(URL);
        res.json(data);
        console.log("Successfully fetch posts from the database and response");
    } catch (error) {
        next(error);
    }
});

app.use((req, res) => {
    res.status(404).send('Not Found');
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

