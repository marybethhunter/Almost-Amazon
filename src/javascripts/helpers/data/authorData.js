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
// UPDATE AUTHOR
// SEARCH AUTHORS

export { getAuthors, createAuthors };
