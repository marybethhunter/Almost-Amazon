import clearDom from '../helpers/clearDom';

const viewAuthor = (obj) => {
  clearDom();
  document.querySelector('#view').innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${obj.first_name} ${obj.last_name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${obj.description || ''}</h6>
    <h6 class="card-subtitle mb-2 text-muted">Email: ${obj.email}</h6>
    <p class="card-text bold">${obj.favorite ? '<span class="badge badge-info sale-badge"><i aria-hidden="true"></i>Favorite Author</span>' : ''}</p>
    <div id="specificBooks">
    <h6>Books:</h6>
    </div>
    <hr>
    <button class="btn btn-info" id="edit-author-btn--${obj.firebaseKey}">Edit Author</button>
    <button class="btn btn-danger" id="delete-author--${obj.firebaseKey}">Delete Author</button>
  </div>
</div>`;
  obj.bookObject.forEach((book) => {
    document.querySelector('#specificBooks').innerHTML += `<p>${book.title}</p>`;
  });
};

export default viewAuthor;
