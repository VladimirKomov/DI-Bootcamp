# In the file menu_item.py, create a new class called MenuItem, 
# the attributes should be the name and price of each item.

# Create several methods (save, delete, update) these methods will 
# allow a user to save, delete and update items from the Menu_Items table. 
# The update method can update the name as well as the price of an item.

import configparser
import psycopg2
import os


class MenuItem:
    def __init__(self, item_name: str = None, item_price: int = 0):
        self.__item_name = item_name
        self.__item_price = item_price

    @property
    def item_name(self):
        return self.__item_name
    
    @item_name.setter
    def item_name(self, value):
        self.__item_name = value

    @property
    def item_price(self):
        return self.__item_price

    @item_price.setter
    def item_price(self, value):
        self.__item_price = value

    def save(self) -> bool:
        connection = self.__make_connection()
        try:
            with connection.cursor() as cursor:
                cursor.execute(
                    "INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s)",
                    (self.__item_name, self.__item_price)
                )
            connection.commit()
            return True
        except psycopg2.DatabaseError as e:
            print(f"Database error: {e}")
            connection.rollback()
            return False
        finally:
            connection.close()

    def delete(self) -> bool:
        connection = self.__make_connection()
        try:
            with connection.cursor() as cursor:
                cursor.execute(
                    "DELETE FROM menu_items WHERE item_name = %s",
                    (self.__item_name,)
                )
            connection.commit()
            return True
        except psycopg2.DatabaseError as e:
            print(f"Database error: {e}")
            connection.rollback()
            return False
        finally:
            connection.close()

    def update(self)-> bool:
        connection = self.__make_connection()
        try:
            with connection.cursor() as cursor:
                cursor.execute(
                    "UPDATE menu_items SET item_price = %s WHERE LOWER(item_name) = %s",
                    (self.__item_price, self.__item_name.lower())
                )
            connection.commit()
            return True
        except psycopg2.DatabaseError as e:
            print(f"Database error: {e}")
            connection.rollback()
            return False
        finally:
            connection.close()

    def __make_connection(self):
        config = configparser.ConfigParser()
        script_dir = os.path.dirname(__file__)
        if not config.read(script_dir + "/config_database.ini"):
            raise FileNotFoundError("Could not read the configuration file.")

        connection = psycopg2.connect(
            database=config['database']['database'],
            user=config['database']['user'],
            password=config['database']['password'],
            host=config['database']['host'],
            port=config['database']['port']         
        )
        return connection
