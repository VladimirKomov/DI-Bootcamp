import { db } from "./db.js";
import * as console from "node:console";

//     GET /posts: Return a list of all blog posts.
//     GET /posts/:id: Return a specific blog post based on its id.
//     POST /posts: Create a new blog post.
//     PUT /posts/:id: Update an existing blog post.
//     DELETE /posts/:id: Delete a blog post.

export async function fetchData() {
    try {
        const result = await db('posts').select();
        console.log('Get from db: ' + JSON.stringify(result));
        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchDataById(id) {
    try {
        const result = await db('posts').select().where('id', id);
        console.log('Get from db: ' + JSON.stringify(result));
        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function createData(data) {
    try {
        const id = await db('posts').insert(data).returning('id');
        console.log('Create post from db id=' + JSON.stringify(id));
        return id;
    } catch (error) {
        console.error(error);
    }
}

export async function updateData(id, data) {
    try {
        const result = await db('posts').where('id', id).update(data).returning('*');
        console.log('Update post from db: ' + JSON.stringify(result));
        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteData(id) {
    try {
        const result = await db('posts').where('id', id).del().returning('id');
        console.log('Delete post from db id=' + JSON.stringify(result));
        return result;
    } catch (error) {
        console.error(error);
    }
};
