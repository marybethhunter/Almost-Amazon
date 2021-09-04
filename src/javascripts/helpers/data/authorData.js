import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR AUTHORS
const dbUrl = firebaseConfig.databaseURL;
// GET AUTHORS
const getAuthors = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// DELETE AUTHOR
const deleteAuthor = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors(userId).then(resolve);
    })
    .catch((error) => reject(error));
});
// CREATE AUTHOR
const createAuthors = (newAuthorData) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, newAuthorData)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/authors/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAuthors(newAuthorData.uid).then((allAuthors) => resolve(allAuthors)));
    })
    .catch((error) => reject(error));
});

// GET SINGLE AUTHOR
const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
// UPDATE AUTHOR
const updateAuthor = (authorObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${authorObj.firebaseKey}.json`, authorObj)
    .then(() => getAuthors(authorObj.uid).then(resolve))
    .catch(reject);
});
// SEARCH AUTHORS

// FILTER AUTHORS BY FAVORITE
const favoriteAuthors = (userId) => new Promise((resolve, reject) => {
  getAuthors(userId)
    .then((userAuthorArray) => {
      const faveAuthors = userAuthorArray.filter((author) => author.favorite);
      resolve(faveAuthors);
    }).catch(reject);
});

export {
  getAuthors,
  createAuthors,
  favoriteAuthors,
  deleteAuthor,
  getSingleAuthor,
  updateAuthor
};
