//Create a simple library system with TypeScript

interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    private books: Book[] = [];

    addBook(newBook: Book): void {
        this.books.push(newBook);
    }

    getBookDetails(isbn: string): string {
        const book = this.books.find(book => book.isbn === isbn);
        if (book) {
            return `title: ${book.title}, author: ${book.author}, 
        publishedYear: ${book.publishedYear}`;
        } else {
            return 'Book not found.';
        }
    }

    protected getBooks(): Book[] {
        return this.books;
    }
}

class DigitalLibrary extends Library {
    readonly website: string;

    constructor(website: string) {
        super();
        this.website = website;
    }

    listBooks(): string[] {
        return this.getBooks().map(book => book.title);
    }
}

const digitalLibrary = new DigitalLibrary("https://www.digitallibrary.com");

digitalLibrary.addBook({
    title: "title1",
    author: "author1",
    isbn: "1234567890",
    publishedYear: 2000,
    genre: "genre"
});

digitalLibrary.addBook({
    title: "title2",
    author: "author2",
    isbn: "0987654321",
    publishedYear: 2010,
});


const bookDetails = digitalLibrary.getBookDetails("1234567890");
console.log("Book:", bookDetails);

const bookTitles = digitalLibrary.listBooks();
console.log(bookTitles);