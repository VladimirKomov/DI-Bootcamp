import React from 'react';

const Book = ({book}) => {
    return (
        <div className='book'>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>{book.genre}</p>
        </div>
    )
}

export default Book;