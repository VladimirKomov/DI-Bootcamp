// Create a directory named blog-api.
//
//     Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
//
//     Install the express package by running npm install express in the terminal.
//
//     Create a file named server.js.
//
//     In server.js, require the express package and set up an Express app.

import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

//JSON parser
app.use(express.json());

// Create a data array to simulate a database.
//     Each item in the array should represent a blog post with properties like id, title, and content.

const posts = [
    {id: 1, title: 'Life is good', content: 'Life is wonderful'},
    {id: 2, title: 'Life is bad', content: 'Life is evil'},
    {id: 3, title: 'Life and cats', content: 'Life with a cat is wonderful, without a cat it\'s terrible' }
];

// Implement the following routes using Express:
//     GET /posts: Return a list of all blog posts.
//     GET /posts/:id: Return a specific blog post based on its id.
//     POST /posts: Create a new blog post.
//     PUT /posts/:id: Update an existing blog post.
//     DELETE /posts/:id: Delete a blog post.

app.get("/posts", (req, res) => {
    res.json(posts);
});

app.get("/posts/:id", (req, res) => {
    const {id} = req.params;
    const post = getPostById(id);
    if (!post) {
        return res.status(404).send(`Post with id=${id} not found!`);
    }
    res.json(post);
});

app.post("/posts", (req, res) => {
    const {title, content} = req.body;
    if (!title || !content) {
        return res.status(400).send('Invalid post!');
    }
    const newId = posts.length > 0 ? posts[posts.length - 1].id +1 : 1;
    const newPost = {id:newId, title, content};
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
    const {id} = req.params;
    const {title, content} = req.body;
    const post = getPostById(id);
    if (!post) {
        return res.status(404).send(`Post with id=${id} not found!`);
    }
    if (title) {
        post.title = title;
    }
    if (content) {
        post.content = content;
    }
    res.status(200).json(post);
});

function getPostById(id) {
    return posts.find(p => p.id == id);
}

app.delete("/posts/:id", (req, res) => {
   const {id} = req.params;
   const postIndex = posts.findIndex(post => post.id == id);
   if (postIndex === -1) {
       return res.status(404).send(`The post id=${id} not found!`);
   }
   posts.splice(postIndex, 1);
   res.status(200).send(`Deleted post id=${id}`);
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});