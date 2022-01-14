# Talker Manager Project!

This project demonstrates my experience with some very important technologies and concepts concerning Back-End web development, such as **HTTP** and **Node.js**.

This is a CRUD API with which you can manage the talkers listed on the file [talker.json](talker.json).

## Instructions to use the API:

* Clone the repository on your computer;
* Install the dependencies: npm install;
* Connect to an API testing platform, such as Postman or Insomnia;
* Initiate the API: npm start.

Now the API is connected to the port 3000 of your localhost.

You may now make requests using any API testing platform.

Possible requests:

### 1

  Endpoint: http://localhost:3000/talker, Method GET;

  Lists all the talkers present on talker.json.

---

### 2

  Endpoint: http://localhost:3000/login, Method POST, Body: {
    "email": "email@email.com",
    "password": "mypassword"
  };

  Makes login and returns a random hexadecimal token with 16 characters.

---

### 3

  Endpoint: http://localhost:3000/talker, Method POST, Headers: { authorization: "token received on the login" }, Body: {
    "name": "talkersName",
    "age": talkersAge (e.g 23),
    "talk": {
      "watchedAt": "dd/mm/yyyy",
      "rate": talkersRate (e.g 4),
    },
  };

  Creates a new talker on the file talker.json.

---

### 4

  Endpoint: http://localhost:3000/talker/:id, Method PUT, Headers: { authorization: "token received on the login" }, Body: {
    "name": "talkersName",
    "age": talkersAge (e.g 23),
    "talk": {
      "watchedAt": "dd/mm/yyyy",
      "rate": talkersRate (e.g 4),
    },
  };

  Updates the talker with id = :id.

---

### 5

  Endpoint: http://localhost:3000/talker/:id, Method DELETE, Headers: { authorization: "token received on the login" };

  Deletes the talker with id = :id.

---

### 6

  Endpoint: http://localhost:3000/talker/search?q=anystring, Method GET, Headers: { authorization: "token received on the login" };

  Searches talkers whose names contain the string after q=. 

---

### 7

Endpoint: http://localhost:3000/talker/:id, Method GET;

Returns the talker whose id is equal to :id.

---

If you have any question, please don't hesitate to contact me through my LinkedIn: https://www.linkedin.com/in/rodrigo-facury/.
