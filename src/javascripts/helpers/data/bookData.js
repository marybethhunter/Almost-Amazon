import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOOK
const deleteBook = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/books/${firebaseKey}.json`)
    .then(() => {
      getBooks(userId).then(resolve);
    })
    .catch((error) => reject(error));
});

// GET SINGLE BOOK
const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
// CREATE BOOK
const createBook = (newBookData) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, newBookData)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/books/${firebaseKey}.json`, { firebaseKey })
        .then(() => getBooks(newBookData.uid).then((allBooks) => resolve(allBooks)));
    })
    .catch((error) => reject(error));
});
// UPDATE BOOK
const updateBook = (bookObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/books/${bookObject.firebaseKey}.json`, bookObject)
    .then(() => getBooks(bookObject.uid).then(resolve))
    .catch(reject);
});

// SEARCH BOOKS
const searchBooks = (searchValue) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/.json?orderBy="title"&equalTo="${searchValue}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// FILTER BOOKS ON SALE
const booksOnSale = (userId) => new Promise((resolve, reject) => {
  getBooks(userId)
    .then((userBooksArray) => {
      const onSaleBooks = userBooksArray.filter((book) => book.sale);
      resolve(onSaleBooks);
    }).catch(reject);
});

// GET BOOKS BY SAME AUTHOR
const getBooksBySameAuthor = (authorFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/.json?orderBy="author_id"&equalTo="${authorFirebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// GET BOOKS BY CART STATUS
// const getBooksInCart = () => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/books/.json?orderBy="inCart"&equalTo=true`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch(reject);
// });

// CHANGE BOOK CART STATUS
// const changeInCartStatus = (e) => {
//   const targetType = e.target.type;
//   const targetId = e.target.id;
//   if (targetType === "button") {

//   }
// };

export {
  getBooks,
  createBook,
  booksOnSale,
  deleteBook,
  getSingleBook,
  updateBook,
  getBooksBySameAuthor,
  searchBooks,
};
