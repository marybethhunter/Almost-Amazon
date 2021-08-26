import { createAuthorSubmitEvent } from '../../events/formEvents';

const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#add-auth-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
        <label for="first-name">Author First Name:</label>
        <input type="text" class="form-control" id="firstName" aria-describedby="authorFirstName" placeholder="Enter Author First Name" required>
      </div>
      <div class="form-group">
        <label for="last-name">Author Last Name:</label>
        <input type="text" class="form-control" id="lastName" placeholder="Enter Author Last Name" required>
      </div>
      <div class="form-group">
        <label for="email">Author Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter Author Email" required>
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;

  document.querySelector('#submit-author-form').addEventListener('submit', createAuthorSubmitEvent);
};

export default addAuthorForm;
