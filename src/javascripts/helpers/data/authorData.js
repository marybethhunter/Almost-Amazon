import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR AUTHORS
const dbUrl = firebaseConfig.databaseURL;
// GET AUTHORS
const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// DELETE AUTHOR
const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors().then(resolve);
    })
    .catch((error) => reject(error));
});
// CREATE AUTHOR
const createAuthors = (newAuthorData) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, newAuthorData)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/authors/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAuthors().then((allAuthors) => resolve(allAuthors)));
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
    .then(() => getAuthors().then(resolve))
    .catch(reject);
});
// SEARCH AUTHORS

// FILTER AUTHORS BY FAVORITE
const favoriteAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/.json?orderBy="favorite"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getAuthors,
  createAuthors,
  favoriteAuthors,
  deleteAuthor,
  getSingleAuthor,
  updateAuthor
};
