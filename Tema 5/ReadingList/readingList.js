class Book {
    /**
     * @param {string} title Book Title
     * @param {string} author Book Author
     * @param {string} genre Book Genre
     */
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.read = false;
        this.read_date = '';
    }
    markAsRead() {
        this.read = true;
    }
    setReadDate(date) {
        this.markAsRead();
        if (typeof date == Date)
            this.read_date = date
        else throw new Error("La fecha debe ser un objeto Date");
    }
}

class BookList {
    constructor() {
        this.read_books = 0;
        this.not_read_books = 0;
        this.next_book = null;
        this.current_book = null;
        this.books = [];
    }
    addBook(book) {
        if (!(book instanceof Book))
            throw new Error("El libro debe ser un objeto Book");
        this.books.forEach(book_in_list => {
            if (book.title == book_in_list.title)
                throw new Error("El libro ya esta en la lista de libros")
        });
        if (!book instanceof Book)
            throw new Error("El libro debe ser un objeto Book");
        if (this.books.length === 0)
            this.current_book = book;

        this.books.push(book);
        this.not_read_books++;
        this.next_book = this.getNextBookToRead();
    }
    finishCurrentBook() {
        if (!this.current_book)
            throw Error("No estas leyendo ningun libro")
        this.current_book.read = true;
        this.current_book.read_date = Date(Date.now());
        this.read_books++;
        this.not_read_books--;
        this.current_book = this.getNextBookToRead();
        this.next_book = this.getNextBookToRead();
    }
    getNotReadBooks() {
        return (this.books.filter(book => book.read == false)).length;
    }
    getNextBookToRead() {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].read == false && this.books[i] != this.current_book)
                return this.books[i];
        }
    }
}
export {Book, BookList};