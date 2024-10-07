import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectBooks, selectFantasyBooks, selectHorrorBooks, selectScienceBooks} from "../redux/booksSelector.js";
import Book from "./Book.jsx";

const ALL = 'All';
const HORROR = 'Horror';
const SCIENCE = 'Science Fiction';
const FANTASY = 'Fantasy';

const BooksList = () => {
    const [selectedGenre, setSelectedGenre] = useState(ALL);

    const books = useSelector((state) => {
        switch (selectedGenre) {
            case HORROR:
                return selectHorrorBooks(state);
            case SCIENCE:
                return selectScienceBooks(state);
            case FANTASY:
                return selectFantasyBooks(state);
            default:
                return selectBooks(state);
        }
    });

    const handleSelectGenre = (e) => {
        setSelectedGenre(e.target.value);
    }

    return (
        <div className="books-list">
            <h1>Books:</h1>
            <label htmlFor='genre-select'>Select genre: </label>
            <select id='genre-select' value={selectedGenre} onChange={handleSelectGenre}>
                <option value={ALL}>All</option>
                <option value={HORROR}>Horror</option>
                <option value={SCIENCE}>Science Fiction</option>
                <option value={FANTASY}>Fantasy</option>
            </select>
            {books.map((book) => (
                <Book key={book.id} book={book}/>
            ))}
        </div>
    )
}

export default BooksList;