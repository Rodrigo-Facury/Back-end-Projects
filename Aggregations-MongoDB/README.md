# Aggregations Project!

This project demonstrates my experience with MongoDB.

First off all, please make sure that you are connected to a Mongo instance:

 * Go to the terminal, type "mongo" and press enter;
 * If it's connected, you may exit;
 * Type exit and press enter;

 Then you need to restore the database on your system:

 * On the repository's root, run the following command on the terminal:

    ```sh
    DBNAME=aggregations ./scripts/resetdb.sh assets
    ```

  * This script will create a database called `aggregations` and will import all its collections.

At this repository you will find a folder called challenges. In each file inside this folder, you will find an MQL pipeline that solves each of the following challenges (desafios). For example, in the file "desafio1.js" you will find the solution of challenge 1 and so on. 


### Challenge 1

#### Return all the movies that satisfy the following conditions:

* `imdb.rating` must be higher or equal to `7`;
* `genres` must not contain `Crime` or `Horror`;
* `rated` must be equal to `PG` or `G`;
* `languages` contains `English` and `Spanish`.
* Use the collection `movies`.

See the solution [here](challenges/desafio1.js).

### Challenge 2

#### Using the previous _pipeline_, return only the following fields `title`, `rated`, `imdb.rating`, `imdb.votes` and `year`, modifying their names to `titulo`, `avaliado`, `notaIMDB`, `votosIMDB` and `ano`, at this specific order.


The query's result must be in the following format (including the order of the fields):

```javascript
{ "titulo" : "A Streetcar Named Desire", "avaliado" : "PG", "notaIMDB" : 8.1, "votosIMDB" : 72364, "ano" : 1951 }
// Demais documentos
```

See the solution [here](challenges/desafio2.js).

### Challenge 3

#### Return those movies ordered by year and IMDB rating descendingly and by title in alphabetic order.

The query's result must be in the following format (including the order of the fields):

```javascript
{ "titulo" : "McFarland, USA", "avaliado" : "PG", "notaIMDB" : 7.5, "votosIMDB" : 14091, "ano" : 2015 }
// Demais documentos
```
See the solution [here](challenges/desafio3.js).

If you have any question, please don't hesitate to contact me through my LinkedIn: https://www.linkedin.com/in/rodrigo-facury/.
