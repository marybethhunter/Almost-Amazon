import { deleteAuthor, getSingleAuthor } from './authorData';
import {
  getSingleBook,
  getBooksBySameAuthor,
  deleteBook,
} from './bookData';

const viewBookDetails = (bookFirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookFirebaseKey)
    .then((bookObject) => {
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObject });
        });
    }).catch(reject);
});

const viewAuthorDetails = (authorFirebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(authorFirebaseKey)
    .then((authorObject) => {
      getBooksBySameAuthor(authorObject.firebaseKey)
        .then((bookObject) => {
          resolve({ bookObject, ...authorObject });
        });
    }).catch(reject);
});

// const viewBookDetails = async (bookFirebasekey) => {
//   const bookObject = await getSingleBook(bookFirebasekey);
//   const authorObject = await getSingleAuthor(bookObject.author_id);
//   return { authorObject, ...bookObject };
// };

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getBooksBySameAuthor(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey));

    Promise.all([...deleteBooks]).then(() => resolve(deleteAuthor(authorId)));
  }).catch(reject);
});

export {
  viewBookDetails,
  viewAuthorDetails,
  deleteAuthorBooks,
};
