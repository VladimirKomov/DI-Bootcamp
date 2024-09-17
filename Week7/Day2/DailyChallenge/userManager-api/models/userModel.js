// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the the database
// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
// GET /users: Retrieve a list of all registered users from the database
// GET /users/:id: Retrieve a specific user by ID from the database
// PUT /users/:id: Update a user’s information by ID in the database

import {db} from "../config/db.js";
import * as console from "node:console";

async function checkUserExists(trx, username, email) {
    const existingUser = await trx("users")
        .where({ username })
        .orWhere({ email })
        .first();

    return existingUser !== undefined;
}


export async function addUserHashpwd(user, hashpwd) {
    const trx = await db.transaction(); //start transaction
    try {
        const userExists = await checkUserExists(trx, user.username, user.email);

        if (userExists) {
            await trx.rollback();  // Откатываем транзакцию
            throw new Error('User with this username or email already exists');
        }

        const userData = await trx("users").insert(user).returning("username");
        await trx("hashpwd").insert(hashpwd);

        await trx.commit();

        console.log('addUser: ', JSON.stringify(userData));
        return userData;
    } catch (error) {
        await trx.rollback();
        console.error('addUser error: ', error);
        throw error;
    }
};

export async function fetchHashpwd(userHashpwd) {
    try {
        const data = await db("hashpwd")
            .where(userHashpwd)
            .first();
        if (!data) {
            console.log('User not found: ', userHashpwd);
            return null;
        } else {
            console.log('User found: ', data);
        }
        return data;
    } catch (error) {
        console.error('fetchHashpwd error: ', error);
        throw error;
    }
};

export async function fetchAllUsers() {
    try {
        const data = await db("users").select("*");
        return data;
    } catch (error) {
        console.error('fetchAllUsers error: ', error);
        throw error;
    }
};

export async function fetchUserById(userId) {
    try {
        const data = await db("users")
            .where('id', userId)
            .first();
        return data;
    } catch (error) {
        console.error('fetchUserById error: ', error);
        throw error;
    }
}

export async function updateUser(userId, user) {
    try {
        const data = await db("users")
            .where('id', userId)
            .update(user)
            .returning('*');
        return data;
    } catch (error) {
        console.error('updateUser error: ', error);
        throw error;
    }
}