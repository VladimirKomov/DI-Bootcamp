// In the js file, create an array called allBooks. This is an array of objects.
//     Each object is a book that has 4 keys (ie. 4 properties) :
// title,
//     author,
//     image : a url,
//     alreadyRead : which is a boolean (true or false).

class Book {
    constructor(title, author, image, alreadyRead) {
        this.title = title;
        this.author = author;
        this.image = image;
        this.alreadyRead = alreadyRead;
    }
}

let allBooks = [];
allBooks.push(new Book('title1', 'author1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbd4fNWshjwkc2cHofbfjdAIYcTpnmLTxpQ&s', false));
allBooks.push(new Book('title2', 'author2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbd4fNWshjwkc2cHofbfjdAIYcTpnmLTxpQ&s', true));

// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
//     You have to display the book’s title and the book’s author.
//     Example: HarryPotter written by JKRolling.
//     The width of the image has to be set to 100px.
//     If the book is already read. Set the color of the book’s details to red.

let sectionBooks = document.getElementsByClassName('listBooks')[0];
for (let book of allBooks) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('book');
    let bookTitle = document.createElement('h2');
    bookTitle.textContent = book.title;
    let bookAuthor = document.createElement('h3');
    bookAuthor.textContent = book.author;
    if (book.alreadyRead) {
        bookTitle.style.color = 'red';
        bookAuthor.style.color = 'red';
    }
    newDiv.appendChild(bookTitle);
    newDiv.appendChild(bookAuthor);
    let bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.style.width = '100px';
    newDiv.appendChild(bookImage);
    sectionBooks.appendChild(newDiv);
}
