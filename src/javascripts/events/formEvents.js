// import { createBook } from '../helpers/data/bookData';
// import { showBooks } from '../components/books';
// import { createAuthors } from '../helpers/data/authorData';
// import { showAuthors } from '../components/authors';
// // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
// const createBookSubmitEvent = (uid) => {
//   const formData = {
//     author_id: document.querySelector('#author').value,
//     image: document.querySelector('#image').value,
//     description: document.querySelector('#description').value,
//     price: Number(document.querySelector('#price').value),
//     sale: document.querySelector('#sale').checked,
//     title: document.querySelector('#title').value,
//     uid
//   };

//   createBook(formData).then((allBooks) => showBooks(allBooks));
// };
// // CLICK EVENT FOR SUBMITTING NEW AUTHOR
// const createAuthorSubmitEvent = (uid) => {
//   const newAuthorData = {
//     first_name: document.querySelector('#firstName').value,
//     last_name: document.querySelector('#lastName').value,
//     email: document.querySelector('#email').value,
//     description: document.querySelector('#auth-description').value,
//     favorite: document.querySelector('#favorite').checked,
//     uid
//   };

//   createAuthors(newAuthorData).then((allAuthors) => showAuthors(allAuthors));
// };

// export { createBookSubmitEvent, createAuthorSubmitEvent };

// PUT ALL THIS IN DOM EVENTS - I CAN'T REMEMBER WHY I HAD A SEPARATE FORM EVENTS PAGE BUT I NEEDED IT TO BE IN DOM EVENTS TO BE ABLE TO USE THE UID FOR THE CREATION OF BOOKS/AUTHORS
