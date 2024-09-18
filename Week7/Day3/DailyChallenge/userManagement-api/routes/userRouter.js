import express from 'express';
import {createUser, getAllUsers, getHashpwd, getUserById, updateUser} from "../controllers/userController.js";

export const userRouter = express.Router();

// POST /register: Allow users to register by providing a username and password.
//     Hash the password using bcrypt before storing it in the JSON file.
// POST /login: Allow users to login by providing their username and password.
//     Compare the hashed password from the JSON file with the provided password.
// GET /users: Retrieve a list of all registered users from a JSON file
//      (only for demonstration purposes; no authentication required).
// GET /users/:id: Retrieve a specific user by ID from the JSON file
//      (only for demonstration purposes; no authentication required).
// PUT /users/:id: Update a user’s information by ID in the JSON file
//      (only for demonstration purposes; no authentication required).

userRouter.post('/register', createUser);
userRouter.post('/login', getHashpwd);
userRouter.get('/users', getAllUsers);
userRouter.get('/users/:id', getUserById);
userRouter.put('/users/:id', updateUser);