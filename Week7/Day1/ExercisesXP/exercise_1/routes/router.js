import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

router.get('/about', (req, res) => {
    res.send('Welcome to the about')
});

export default router;