import clearDom from '../helpers/clearDom';

const viewCart = (obj) => {
  clearDom();
  document.querySelector('#cart').innerHTML += `
    <div class="card">
        <img class="card-img-top" src=${obj.image} alt=${obj.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${obj.title}</h5>
        <p class="card-text bold">${obj.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${obj.price}` : `$${obj.price}`}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-book-btn--${obj.firebaseKey}"></i>
        <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        <div class="form-check">
        <input type="checkbox" class="form-check-input" id="cartCheckbox" ${obj.inCart ? 'checked' : ''}>
        <label class="form-check-label" for="cart">Add to Cart?</label>
      </div>
        </div>
      </div>`;
  console.warn(obj);
};

export default viewCart;
