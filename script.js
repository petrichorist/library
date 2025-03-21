'use strict';

const body = document.querySelector('body');
const add = document.querySelector('.add');
const container = document.querySelector('.container');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();

  if (read == true || read == 'Yes' || read == 'yes') {
    this.read = true;
  } else if (read == false || read == 'No' || read == 'no') {
    this.read = false;
  } else {
    this.read = undefined;
  }

  console.log(
    `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? 'already read' : 'not read yet'
    }`
  );
}

function addBookToLibrary() {
  let title = prompt("What's the title?");
  let author = prompt("Who's the author?");
  let pages = prompt('Enter the number of pages:');
  let read = prompt('Have you read it? Yes/No');

  let book = new Book(title, author, pages, read);

  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  container.textContent = '';
  myLibrary.forEach(book => {
    container.innerHTML += `<br/>${book.title} by ${book.author}, ${book.pages} pages, ${book.read ? 'already read' : 'not read yet'}`;
    console.log(`ID: ${book.id} - ${book.title} by ${book.author}`);
  });
}

add.addEventListener('click', () => {
  addBookToLibrary();
});