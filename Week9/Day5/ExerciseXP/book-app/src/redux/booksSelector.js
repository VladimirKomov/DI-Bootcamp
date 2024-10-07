import {createSelector} from "@reduxjs/toolkit";

//base selector, all selectors in one place
export const selectBooks = state => state.books.books;

export const selectHorrorBooks = createSelector(
    [selectBooks],
    (books) => books.filter(book => book.genre === 'Horror')
);

export const selectScienceBooks = createSelector(
    [selectBooks],
    (books) => books.filter(book => book.genre === 'Science Fiction')
)

export const selectFantasyBooks = createSelector(
    [selectBooks],
    (books) => books.filter(book => book.genre === 'Fantasy')
);
