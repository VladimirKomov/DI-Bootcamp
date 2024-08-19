-- 1 ----------------------

--All items, ordered by price (lowest to highest).
SELECT * FROM items
ORDER BY price;

--Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items WHERE price >= 80
ORDER BY price DESC;

--The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;

--All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name
FROM customers
ORDER BY last_name DESC;

--2 ------------------------------------
--In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM customer;

--Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM customer;

--Lets get all the dates that accounts were created.
--Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT DISTINCT create_date FROM customer;

--Write a query to get all the customer details from the customer table,
--it should be displayed in descending order by their first name.
SELECT * FROM customer
ORDER BY first_name DESC;

--Write a query to get the film ID, title, description, year of release and
--rental rate in ascending order according to their rental rate.
SELECT film_ID, description, release_year, rental_rate FROM film
ORDER BY rental_rate ASC;

-- Write a query to get the address, and the phone number of all customers living
-- 	in the Texas district, these details can be found in the “address” table.
SELECT a.address, a.phone
FROM customer cus
JOIN address a ON cus.address_id = a.address_id
WHERE a.district = 'Texas';

-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT * FROM film WHERE film_id IN (15, 150)

-- Write a query which should check if your favorite movie exists in the database.
-- 	Have your query get the film ID, title, description, length and the rental rate,
-- 	these details can be found in the “film” table.
SELECT film_ID, title, description, length, rental_rate FROM film
WHERE title = 'Fight club';

-- No luck finding your movie? Maybe you made a mistake spelling the name.
-- 	Write a query to get the film ID, title, description, length and the rental rate
-- 	of all the movies starting with the two first letters of your favorite movie.
SELECT film_ID, title, description, length, rental_rate FROM film
WHERE title LIKE 'Fi%';

-- Write a query which will find the 10 cheapest movies.
SELECT film_ID, title, description, length, rental_rate, replacement_cost FROM film
ORDER BY replacement_cost ASC
LIMIT 10

-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
SELECT film_ID, title, description, length, rental_rate, replacement_cost FROM film
ORDER BY replacement_cost ASC
LIMIT 10 OFFSET 10;

WITH temporary_films AS (
    SELECT film_ID, title, description, length, rental_rate, replacement_cost,
    ROW_NUMBER() OVER (ORDER BY replacement_cost ASC) AS num
    FROM film
)
SELECT *
FROM temporary_films
WHERE num > 10 AND num <= 20

-- Write a query which will join the data in the customer table and the payment table.
-- 	You want to get the first name and last name from the curstomer table,
-- 	as well as the amount and the date of every payment made by a customer,
-- 	ordered by their id (from 1 to…).
SELECT cust.first_name, cust.last_name, pay.amount, pay.payment_date FROM customer cust
JOIN payment pay ON cust.customer_id = pay.customer_id
ORDER BY cust.customer_id ASC

-- You need to check your inventory.
-- Write a query to get all the movies which are not in inventory.
SELECT * FROM film f
WHERE f.film_id NOT IN (SELECT film_id FROM inventory)

-- Write a query to find which city is in which country.
SELECT cit.city, coun.country FROM city cit
JOIN country coun ON cit.country_id = coun.country_id

-- Bonus You want to be able to see how your sellers have been doing?
-- 	Write a query to get the customer’s id, names (first and last),
-- 	the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
SELECT pay.staff_id, cus.customer_id, cus.first_name, cus.last_name, pay.amount, pay.payment_date
	FROM customer cus
JOIN payment pay ON cus.customer_id = pay.customer_id
ORDER BY pay.staff_id ASC

