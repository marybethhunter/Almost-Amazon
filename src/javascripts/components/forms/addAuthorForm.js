import { createAuthorSubmitEvent } from '../../events/formEvents';

const addAuthorForm = (obj = {}) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#add-auth-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
        <label for="first-name">Author First Name:</label>
        <input type="text" class="form-control" id="firstName" aria-describedby="authorFirstName" placeholder="Enter Author First Name" value="${obj.first_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="last-name">Author Last Name:</label>
        <input type="text" class="form-control" id="lastName" placeholder="Enter Author Last Name" value="${obj.last_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="email">Author Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter Author Email" value="${obj.email || ''}" required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
        <label class="form-check-label" for="favorite">Favorite Author?</label>
      </div>
      <button type="submit" id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="btn btn-primary">Submit Author</button>
    </form>`;

  document.querySelector('#submit-author-form').addEventListener('submit', createAuthorSubmitEvent);
};

export default addAuthorForm;
