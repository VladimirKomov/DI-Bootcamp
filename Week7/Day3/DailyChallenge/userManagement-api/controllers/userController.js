import {readFile, writeFile} from "../models/userModel.js";
import console from "node:console";
import bcrypt from "bcryptjs";

const usersFilePath = './config/users.json';

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
        const {firstName, lastName, email, userName, password} = req.body;
        console.log('Creating new user: ', firstName, lastName, email, userName);
        if (!firstName || !lastName || !email || !userName || !password) {
            return res.status(400).json({success: false, error: "All fields are required"});
        }
        const users = await readFile(usersFilePath);
        const useridex = users.findIndex((user) =>
            user.userName.toLowerCase() === userName.toLowerCase()
            || user.email.toLowerCase() === email.toLowerCase());
        if (useridex !== -1) {
            return res.status(400).json({success: false, error: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id : users.length + 1,
            firstName,
            lastName,
            email,
            userName,
            password: hashedPassword
        };

        users.push(newUser);
        await writeFile(usersFilePath, users);
        res.status(201).json({success: true, data: {userName, email}});
    } catch (error) {
        next(error);
    }
}

export const getHashpwd = async (req, res, next) => {
    try {
        const {userName, password} = req.body;
        if (!userName || !password) {
            return res.status(400).json({success: false, error: "All fields are required"});
        }
        const users = await readFile(usersFilePath);
        const user = users.find((user) => user.userName.toLowerCase() === userName.toLowerCase());
        if (!user) {
            return res.status(404).json({success: false, error: "User not found"});
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({success: false, error: "Invalid credentials"});
        }
        res.status(200).json({
            success: true, data: {userName: user.userName, email: user.email}});
    } catch (error) {
        next(error);
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await readFile(usersFilePath);
        const usersWithoutPasswords = users.map(({ id, password, ...rest }) => rest);
        res.status(200).json({success: true, data: usersWithoutPasswords});
    } catch (error) {
        next(error);
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const users = await readFile(usersFilePath);
        const user = users.find((user) => user.id == userId);
        if (!user) {
            return res.status(404).json({success: false, error: "User not found"});
        }
        res.status(200).json({success: true, data: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                userName: user.userName
            }});
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const {firstName, lastName, email, userName, password} = req.body;
        const users = await readFile(usersFilePath);
        const userIndex = users.findIndex((user) => user.id == userId);
        if (userIndex === -1) {
            return res.status(404).json({success: false, error: "User not found"});
        }
        const existingUser = users[userIndex];
        const updatedUser = {
            id: existingUser.id,
            firstName : firstName ? firstName : existingUser.firstName,
            lastName : lastName ? lastName : existingUser.lastName,
            email : existingUser.email,
            userName : existingUser.userName,
            password: existingUser.password
        };
        users[userIndex] = updatedUser;
        await writeFile(usersFilePath, users);
        res.status(200).json({success: true, data: {
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                email: updatedUser.email,
                userName: updatedUser.userName
            }});
    } catch (error) {
        next(error);
    }
}