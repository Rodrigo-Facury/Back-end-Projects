const express = require('express');
const bodyParser = require('body-parser');
const {
        validateEmail,
        validatePassword,
        validateToken,
        validateName,
        validateAge,
        validateTalk,
        validateTalkFields, 
      } = require('./middlewares');
const { 
        getAllTalkers,
        login,
        postTalker,
        putTalker,
        deleteTalker,
        searchTalker,
        getTalkerById,
      } = require('./controllers');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getAllTalkers);

app.post('/login', validateEmail, validatePassword, login);

app.post('/talker', validateToken, validateName,
validateAge, validateTalkFields, validateTalk, postTalker);

app.put('/talker/:id', validateToken, validateName,
validateAge, validateTalkFields, validateTalk, putTalker);

app.delete('/talker/:id', validateToken, deleteTalker);

app.get('/talker/search', validateToken, searchTalker);

app.get('/talker/:id', getTalkerById);

app.listen(PORT, () => {
  console.log('Online');
});
