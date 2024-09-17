import express from 'express';
import {changeUser, createUser, getAllUsers, getHashpwd, getUser} from "../controllers/userController.js";
import {updateUser} from "../models/userModel.js";


// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the the database
// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
// GET /users: Retrieve a list of all registered users from the database
// GET /users/:id: Retrieve a specific user by ID from the database
// PUT /users/:id: Update a user’s information by ID in the database

export const routerUser = express.Router();

routerUser.post('/register', createUser);
routerUser.post('/login', getHashpwd);
routerUser.get('/users', getAllUsers);
routerUser.get('/users/:id', getUser);
routerUser.put('/users/:id', changeUser);