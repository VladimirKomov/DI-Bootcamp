// Create a new directory named book-api.
//     Inside the book-api directory, initialize a new Node.js project and install the express package.
//     Create a new file named app.js in the book-api directory.
//     In app.js, import the express module and create an instance of an Express app.
//     Define a basic data array containing a few book objects. Each book object should have properties like id,
//     title, author, and publishedYear.
//     Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.
//     Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
//     Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter
//     from the URL and use it to find the corresponding book in the books array. If the book is found, send a
//     JSON response with the book details and a status code of 200 (OK). If the book is not found,
//     send a 404 status with a “Book not found” message.
//     Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content.
//     Inside the route handler, create a new book object with an incremented ID and the data from the request body.
//     Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).

import express from 'express';

const app = express();
app.use(express.json());
const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

const books = [
    {id: 1, title: 'title1', author: 'author1', publishedYear: 2000},
    {id: 2, title: 'title2', author: 'author2', publishedYear: 2010},
    {id: 3, title: 'title3', author: 'author3', publishedYear: 2020}
];

app.get("/api/books", (req, res) => {
    res.json(books);
});

app.get("/api/books/:id", (req, res) => {
    const {id} = req.params;
    const book = books.find(book => book.id == id);
    if (!book) {
        return res.status(404).send(`Book not found! id=${id}`);
    }
    res.status(200).json(book);
});

app.post("/api/books", (req, res) => {
   const {title, author, publishedYear} = req.body;
   const id = books.length > 0 ? (books[books.length - 1].id) + 1 : 1;
   const newBook = {id, title, author, publishedYear};
   res.status(201).json(newBook);
});

app.use((req, res) => {
    res.status(404).send('Not Found');
});
app.use((err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});