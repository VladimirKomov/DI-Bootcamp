import express from "express";
import {createBook, getAllBooks, getBook} from "../controllers/controllerBooks.js";


export const routerBooks = express.Router();

routerBooks.get("/books", getAllBooks);
routerBooks.get("/books/:id", getBook);
routerBooks.post("/books", createBook);