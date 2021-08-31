import addBookForm from '../components/forms/addBookForm';
import addAuthorForm from '../components/forms/addAuthorForm';
import
{
  deleteBook,
  getBooksBySameAuthor,
  getSingleBook,
  updateBook,
} from '../helpers/data/bookData';
import { showBooks } from '../components/books';
import { deleteAuthor, getSingleAuthor, updateAuthor } from '../helpers/data/authorData';
import { showAuthors } from '../components/authors';
import viewBook from '../components/viewBook';
import viewAuthor from '../components/viewAuthor';
import { viewBookDetails, viewAuthorDetails } from '../helpers/data/mergedData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, id] = e.target.id.split('--');
        deleteBook(id).then(showBooks);
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      console.warn('CLICKED ADD BOOK BUTTON', e.target.id);
      addBookForm();
    }

    // CLICK EVENT FOR EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, id] = e.target.id.split('--');
      getSingleBook(id).then((bookObj) => addBookForm(bookObj));
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
      };
      updateBook(bookObject).then(showBooks);
    }
    // CLICK EVENT FOR VIEWING BOOK DETAILS
    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewBookDetails(firebaseKey).then(viewBook);
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE AUTHOR', e.target.id);
        const [, id] = e.target.id.split('--');
        deleteAuthor(id).then(showAuthors);
      }
    }
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR

    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm();
    }
    // CLICK EVENT FOR VIEWING AUTHOR DETAILS
    if (e.target.id.includes('view-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(getBooksBySameAuthor('-MTpcliA_-GtWZHpb8sf'));
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
      };
      updateAuthor(authorObj).then(showAuthors);
    }
  });
};

export default domEvents;
