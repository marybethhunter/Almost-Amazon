import { createBook } from '../helpers/data/bookData';
import { showBooks } from '../components/books';
// CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
const createBookSubmitEvent = () => {
  const formData = {
    author_id: document.querySelector('#author').value,
    image: document.querySelector('#image').value,
    price: Number(document.querySelector('#price').value),
    sale: document.querySelector('#sale').checked,
    title: document.querySelector('#title').value
  };

  createBook(formData).then((allBooks) => showBooks(allBooks));
};

export default createBookSubmitEvent;
