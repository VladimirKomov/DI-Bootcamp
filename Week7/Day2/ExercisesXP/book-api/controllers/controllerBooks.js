import {addBook, fetchAllBooks, fetchBook} from "../models/modelBooks.js";
import * as console from "node:console";

export const getAllBooks = async (req, res) => {
    try {
        const data = await fetchAllBooks();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getBook = async (req, res) => {
    try {
        const data = await fetchBook(req.params.id);
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const createBook = async (req, res) => {
    try {
        const data = req.body;
        const result = await addBook(data);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}