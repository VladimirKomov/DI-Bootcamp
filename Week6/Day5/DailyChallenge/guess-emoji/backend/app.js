import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import path from 'path';
import { findUser, createUser } from './services/userService.js';
import { getGame, getGameCategories } from "./services/gameService.js";
import { createScore, findScore, updateScore } from "./services/scoreService.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(path.resolve(), '../frontend')));

app.post('/register', async (req, res) => {
    const { name, password } = req.body;
    const existingUser = await findUser(name);
    if (existingUser) {
        return res.status(400).send('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser({ name, password: hashedPassword });
    await createScore({ name, score: 0 }); // Create score for new user
    res.json({ message: 'Successfully registered' });
});

app.post('/login', async (req, res) => {
    const { name, password } = req.body;
    const user = await findUser(name);
    if (!user) {
        return res.status(401).json({ error: 'Wrong credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).json({ error: 'Wrong credentials' });
    }

    res.json({ message: 'Successfully logged in' });
});

app.get('/api/categories', async (req, res) => {
    try {
        const categories = await getGameCategories(); // Fetch game categories
        res.json(categories);
    } catch (error) {
        console.error('Error getting categories:', error);
        res.status(500).json({ error: 'Error getting categories' });
    }
});

// Route that uses the getGame function to fetch emojis and return the game data
app.get('/api/random-emojis', async (req, res) => {
    try {
        const { category } = req.query; // Get the category from the query parameters
        const gameData = await getGame(category); // Call the getGame function
        res.json(gameData); // Send the result as a JSON response
    } catch (error) {
        console.error('Error getting emojis:', error);
        res.status(500).json({ error: 'Error getting emojis.' });
    }
});

// API route to get the current score
app.get('/api/score', async (req, res) => {
    const { name } = req.query;
    const score = await findScore(name); // Fetch user score
    if (score !== null) {
        res.json({ name, score });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// API route to update the score
app.post('/api/score', async (req, res) => {
    const { name, score } = req.body;

    if (typeof name !== 'string' || typeof score !== 'number') {
        return res.status(400).json({ message: 'Invalid input data' });
    }

    await updateScore(name, score); // Update user score
    res.json({ message: 'Score updated successfully', name, score });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
