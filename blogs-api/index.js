const express = require('express');
const {
  validateDisplayName,
  validatePassword,
  validateEmail,
  doesUserExist,
  validateLoginEmail,
  validateLoginPassword,
  doesLoginMatch,
  validateToken,
  validateCategoryName,
  validatePostTitle,
  validatePostCategoryIds,
  validatePostContent,
} = require('./middlewares');
const {
  postUser,
  login,
  getUsers,
  getUserById,
  postCategory,
  getCategories,
  postPost,
  getPosts,
} = require('./controllers');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validateEmail, validatePassword, validateDisplayName, doesUserExist, postUser);

app.post('/login', validateLoginEmail, validateLoginPassword, doesLoginMatch, login);

app.get('/user', validateToken, getUsers);

app.get('/user/:id', validateToken, getUserById);

app.post('/categories', validateToken, validateCategoryName, postCategory);

app.get('/categories', validateToken, getCategories);

app.post('/post', validateToken, validatePostTitle,
  validatePostContent, validatePostCategoryIds, postPost);

app.get('/post', validateToken, getPosts);
