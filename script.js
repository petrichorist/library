'use strict';

const books = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();

  if (read == 'yes' || read == 'Yes') {
    this.read = true;
  } else if (read == 'no' || read == 'No') {
    this.read = false;
  }

  console.log(
    `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? 'already read' : 'not read yet'
    }`
  );
}

function addBook() {
  let title = prompt("What's the title of this book?");
  let author = prompt('Who is the author?');
  let pages = prompt('Enter the number of pages:');
  let read = prompt('Have you read it? Yes/No');

  let book = new Book(title, author, pages, read);
  books.push(book);
}

function del() {
  let del = prompt('Choose an index entry to remove the corresponding book:');

  if (del != undefined || del != null) {
    delete books[del];
  } else {
    console.log("You didn't enter a correct index entry...");
  }
}

function displayBooks() {
  console.log('\nCurrent books in library:');
  books.forEach(book => {
    console.log(`ID: ${book.id} - ${book.title} by ${book.author}`);
  });
}
