import {db} from "../config/db.js";
import * as console from "node:console";


export async function fetchAllBooks() {
    try {
        const res = await db('books').select();
        console.log('fetchAllBooks ', JSON.stringify(res));
        return res;
    } catch (error) {
        console.error('Error fetching all books: ', error);
        throw error;
    }
};

export async function fetchBook(id) {
    try {
        const res = await db('books').where('id', id).select();
        console.log('fetchBook ', JSON.stringify(res));
        return res;
    } catch (error) {
        console.error('Error fetching book: ', error);
        throw error;
    }
};

export async function addBook(book) {
    try {
        const res = await db('books').insert(book).returning('id');
        console.log('createBook ', JSON.stringify(res));
        return res;
    } catch (error) {
        console.error('Error creating book: ', error);
        throw error;
    }
};

