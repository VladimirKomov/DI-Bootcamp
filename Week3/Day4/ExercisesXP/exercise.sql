-- Active: 1724139112563@@127.0.0.1@5432@restaurantmenumanager
-- Create a new database and a new table in pgAdmin (or in psql). 
-- The table is named Menu_Items and contains the columns
-- item_id : SERIAL PRIMARY KEY
-- item_name : VARCHAR(30) NOT NULL
-- item_price : SMALLINT DEFAULT 0
CREATE DATABASE RestaurantMenuManager;

CREATE TABLE IF NOT EXISTS Menu_Items(
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
    item_price SMALLINT DEFAULT 0
    );