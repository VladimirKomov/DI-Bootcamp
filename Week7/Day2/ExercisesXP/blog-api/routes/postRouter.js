import express from 'express';
import {createPost, deletePost, getAllPosts, getPostById, updatePost} from "../controllers/postController.js";


//     GET /posts: Return a list of all blog posts.
//     GET /posts/:id: Return a specific blog post based on its id.
//     POST /posts: Create a new blog post.
//     PUT /posts/:id: Update an existing blog post.
//     DELETE /posts/:id: Delete a blog post.

export const router = express.Router();

router.get('/posts', getAllPosts);

router.get('/posts/:id', getPostById);

router.post('/posts', createPost);

router.put('/posts/:id', updatePost);

router.delete('/posts/:id', deletePost);