-- Active: 1724139112563@@127.0.0.1@5432@countries
CREATE DATABASE countries;

CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    capital VARCHAR(255) NOT NULL,
    flag VARCHAR(255) NOT NULL,
    subregion VARCHAR(255) NOT NULL,
    population INT NOT NULL
);

SELECT * FROM countries;
