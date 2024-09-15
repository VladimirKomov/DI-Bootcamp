// // routes/books.js
//
// // Sample in-memory database for storing books
// const books = [];
// // Get all books
// // Add a new book
// // Update a book by ID
// // Delete a book by ID

import express from 'express';

const books = [{id: 1, author: 'author1', title: 'title1'}];
export const router = express.Router();

router.get('/books', (req, res) => {
    res.json(books);
});

router.post('/books', (req, res) => {
    const {author, title} = req.body;
    const newBook = {id: books.length + 1, author, title};
    books.push(newBook);
    res.json(newBook);
});

router.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const idex = books.findIndex(b => b.id == id);
    if (idex === -1) {
        return res.status(404).json({ message: `book id=${id} to update not found` });
    }
    const { author, title } = req.body;
    if (author) {
        books[idex].author = author;
    }
    if (title) {
        books[idex].title = title;
    }
    res.json(books[idex]);
});

router.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const idex = books.findIndex(b => b.id == id);
    if (idex === -1) {
        return res.status(404).json({ message: `book id=${id} to update not found` });
    }
    books.splice(idex, 1);
    res.status(204).send();
})
