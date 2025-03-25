'use strict';

const body = document.querySelector('body');
const container = document.querySelector('.container');
const add = document.querySelector('.add');

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
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
  displayBooks();
};

function addBookToLibrary() {
  let title = prompt('Title');
  let author = prompt('Author');
  let pages = prompt('Number of pages');
  let read = prompt('Have you read it? Yes/No');

  let book = new Book(title, author, pages, read);

  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  container.textContent = '';

  myLibrary.forEach(book => {
    container.innerHTML += `<div class="card" data-id="${book.id}"><span class="title">${book.title}</span><br/>Author: ${book.author}<br/>Pages: ${book.pages}<br/>${book.read ? 'already read' : 'not read yet'}<div class="buttons"><button class="read" data-id="${book.id}">Read</button><br/><button class="delete" data-id="${book.id}">Delete</button></div></div>`;
  });
}

add.addEventListener('click', () => {
  addBookToLibrary();
});

container.addEventListener('click', function (e) {
  if (e.target.matches('.read')) {
    const bookId = e.target.getAttribute('data-id');
    const bookIndex = myLibrary.findIndex(book => book.id === bookId);

    if (bookIndex !== -1) {
      myLibrary[bookIndex].toggleReadStatus();
    }
  }

  if (e.target.matches('.delete')) {
    const bookId = e.target.getAttribute('data-id');
    const bookIndex = myLibrary.findIndex(book => book.id === bookId);

    if (bookIndex !== -1) {
      myLibrary.splice(bookIndex, 1);
      displayBooks();
    }
  }
});