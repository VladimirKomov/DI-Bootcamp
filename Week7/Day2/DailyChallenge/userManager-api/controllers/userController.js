import {addUserHashpwd, fetchAllUsers, fetchHashpwd, fetchUserById, updateUser} from "../models/userModel.js";
import * as console from "node:console";
import bcrypt from 'bcryptjs';

// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the the database
// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.GET /users: Retrieve a list of all registered users from the database
// GET /users/:id: Retrieve a specific user by ID from the database
// PUT /users/:id: Update a user’s information by ID in the database

export const errorHandler = (err, req, res, next) => {
    console.error(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        error: err.message || "Server Error",
    });
};

export const createUser = async (req, res, next) => {
    try {
        const { email, username, first_name, last_name, password } = req.body;

        // all good?
        if (!email || !username || !first_name || !last_name || !password) {
            return res.status(400).json({ success: false, error: "All fields are required" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = {
            email,
            username,
            first_name,
            last_name
        };
        const userCredentials = {
            username,
            password: hashedPassword
        };
        const userData = await addUserHashpwd(user, userCredentials);

        res.status(201).json({ success: true, data: userData });
    } catch (error) {
        next(error);
    }
};

export const getHashpwd = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        if (!username || !password) {
            return res.status(400).json({ success: false, error: "All fields are required" });
        }
        const user = await fetchHashpwd({username});
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, error: "Invalid credentials" });
        }
        res.status(200).json({ success: true, data: user.username });
    } catch (error) {
        next(error);
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await fetchAllUsers();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        next(error);
    }
};

export const getUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await fetchUserById(userId);
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        next(error);
    }
};

export const changeUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = req.body;
        const updatedUser = await updateUser(userId, user);
        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        next(error);
    }
}