import { showAuthors } from '../components/authors';
import signOut from '../helpers/auth/signOut';
import { favoriteAuthors, getAuthors } from '../helpers/data/authorData';
import { showBooks } from '../components/books';
import { booksOnSale, getBooks, searchBooks } from '../helpers/data/bookData';
import viewCart from '../components/viewCart';
import clearDom from '../helpers/clearDom';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    clearDom();
    booksOnSale(uid).then(showBooks);
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    clearDom();
    getBooks(uid).then((books) => showBooks(books));
  });

  // FAVE AUTHORS FILTER
  document.querySelector('#faveAuthors').addEventListener('click', () => {
    clearDom();
    favoriteAuthors(uid).then(showAuthors);
  });

  // CART
  document.querySelector('#cart-btn').addEventListener('click', () => {
    viewCart();
  });

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value;
    if (e.keyCode === 13) {
      searchBooks(searchValue).then(showBooks);
      document.querySelector('#search').value = '';
    }
  });

  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors

  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(uid).then((authors) => showAuthors(authors));
  });
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
};

export default navigationEvents;
