# MySQL Project!

This project demonstrates my experience with MySQL.

First off all, please make sure that you are connected to a MySQL instance.

At this repository you will find a folder called challenges. In each file inside this folder, you will find a MySQL query that solves each of the following challenges (desafios). For example, in the file "desafio1.sql" you will find the solution of challenge 1 and so on.

## Challenge 1

This challenge requires the creation of a MySQL database based on the normalization of a spreadsheet table.

[Download the table here](./SpotifyClone-Non-NormalizedTable.xlsx)

What's being validated:

- Whether the plans are present on the normalized table.

- Whether the history is present on the normalized table.

- Whether the information about people following artists is present on the normalized table.

- Whether the albums are present on the normalized table.

- Whether the songs are present on the normalized table.

- Whether the information about users is present on the normalized table.

- Whether the information about artists is present on the normalized table.

See the solution [here](desafio1.sql).

---

## Challenge 2

Create a `VIEW` called `estatisticas_musicais` that shows 3 columns:

1. The first must show the total amount of songs. Give this column the alias "**cancoes**".

2. The second must show the total amount of artists and must have the alias "**artistas**".

3. The third must show the amount of albums and must have the alias "**albuns**".

See the solution [here](desafio2.sql).

---

## Challenge 3

Create a `VIEW` called `historico_reproducao_usuarios`. This `VIEW` must have 2 columns:

1. The first must have the alias "**usuario**" and show the name of the user.

2. The second must have the alias "**nome**" and show the name of the listened song based on the user's history.

See the solution [here](desafio3.sql).

If you have any question, please don't hesitate to contact me through my LinkedIn: https://www.linkedin.com/in/rodrigo-facury/.
