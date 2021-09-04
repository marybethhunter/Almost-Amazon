import addBookForm from '../components/forms/addBookForm';
import addAuthorForm from '../components/forms/addAuthorForm';
import
{
  deleteBook,
  getSingleBook,
  updateBook,
  createBook
}
  from '../helpers/data/bookData';
import { showBooks } from '../components/books';
import { getSingleAuthor, updateAuthor, createAuthors } from '../helpers/data/authorData';
import { showAuthors } from '../components/authors';
import viewBook from '../components/viewBook';
import viewAuthor from '../components/viewAuthor';
// eslint-disable-next-line import/named
import { viewBookDetails, viewAuthorDetails, deleteAuthorBooks } from '../helpers/data/mergedData';
import viewCart from '../components/viewCart';
// import clearDom from '../helpers/clearDom';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');
        deleteBook(id, uid).then(showBooks);
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addBookForm(uid);
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      const formData = {
        author_id: document.querySelector('#author').value,
        image: document.querySelector('#image').value,
        description: document.querySelector('#description').value,
        price: Number(document.querySelector('#price').value),
        sale: document.querySelector('#sale').checked,
        title: document.querySelector('#title').value,
        uid
      };

      createBook(formData).then((allBooks) => showBooks(allBooks));
    }

    // CLICK EVENT FOR EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, id] = e.target.id.split('--');
      getSingleBook(id).then((bookObj) => addBookForm(bookObj.uid, bookObj));
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      e.preventDefault();
      const [, id] = e.target.id.split('--');
      const bookObject = {
        author_id: document.querySelector('#author').value,
        image: document.querySelector('#image').value,
        description: document.querySelector('#description').value,
        price: Number(document.querySelector('#price').value),
        sale: document.querySelector('#sale').checked,
        title: document.querySelector('#title').value,
        firebaseKey: id,
        uid
      };
      updateBook(bookObject).then(showBooks);
    }
    // CLICK EVENT FOR VIEWING BOOK DETAILS
    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewBookDetails(firebaseKey).then(viewBook);
    }

    // CLICK EVENT FOR ADDING BOOK TO CART
    if (e.target.id.includes('add-to-cart-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleBook(firebaseKey).then((book) => viewCart(book));
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');
        deleteAuthorBooks(id, uid).then(showAuthors);
      }
    }
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR

    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm(uid);
    }

    // CLICK EVENT FOR SUBMITTING NEW AUTHOR
    if (e.target.id.includes('submit-author')) {
      const newAuthorData = {
        first_name: document.querySelector('#firstName').value,
        last_name: document.querySelector('#lastName').value,
        email: document.querySelector('#email').value,
        description: document.querySelector('#auth-description').value,
        favorite: document.querySelector('#favorite').checked,
        uid
      };

      createAuthors(newAuthorData).then((allAuthors) => showAuthors(allAuthors));
    }

    // CLICK EVENT FOR VIEWING AUTHOR DETAILS
    if (e.target.id.includes('view-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewAuthorDetails(firebaseKey).then(viewAuthor);
    }
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    // this is in the addAuthorForm function already
    // ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('edit-author-btn')) {
      const [, id] = e.target.id.split('--');
      getSingleAuthor(id).then((authObj) => addAuthorForm(authObj));
    }
    // UPDATING AUTHOR
    if (e.target.id.includes('update-author')) {
      e.preventDefault();
      const [, id] = e.target.id.split('--');
      const authorObj = {
        first_name: document.querySelector('#firstName').value,
        last_name: document.querySelector('#lastName').value,
        email: document.querySelector('#email').value,
        favorite: document.querySelector('#favorite').checked,
        description: document.querySelector('#auth-description').value,
        firebaseKey: id,
        uid
      };
      updateAuthor(authorObj).then(showAuthors);
    }
  });
};

export default domEvents;
