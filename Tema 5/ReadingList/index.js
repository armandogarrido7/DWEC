import {Book, BookList} from "readingList.js";
function addBook(){
    title = document.getElementById('title');
    author = document.getElementById('author');
    genre = document.getElementById('genre');
    if (title.value.trim() && author.value.trim() && genre.value.trim()){
        book = new Book(title.value, author.value, genre.value);
        console.log(book);
        title.value = author.value = genre.value = '';
        book_element = document.createElement('li');
        book_element.innerHTML = "Title: " + book.title + " Author: " + book.author + " Genre: " + book.genre;
        console.log(title.value + author.value + genre.value)
        readingList = document.getElementById('readingList');
        readingList.appendChild(book_element);
    }
    
}

window.onload = () =>{
    submit_btn = document.getElementsByTagName('button')[0];
    console.log(submit_btn);
    submit_btn.addEventListener('click', addBook);
}
