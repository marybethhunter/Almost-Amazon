import { getSingleAuthor } from './authorData';
import { getSingleBook, getBooksBySameAuthor } from './bookData';

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

export { viewBookDetails, viewAuthorDetails };
