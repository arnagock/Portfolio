DROP TABLE tweet IF EXISTS;



DROP TABLE tweet IF EXISTS;

CREATE TABLE tweet (
  id INTEGER NOT NULL IDENTITY,
  author VARCHAR(30) NOT NULL,
  text VARCHAR(140) NOT NULL
);
