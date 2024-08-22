# In the file menu_manager.py, create a new class called MenuManager
# Create a Class Method called get_by_name that will return a single 
# item from the Menu_Items table depending on it’s name, if an object is 
# not found (there is no item matching the name in the get_by_name method) return None.
# Create a Class Method called all_items which will return a list of all 
# the items from the Menu_Items table.

import configparser
import psycopg2
import os

class MenuManager:

    @classmethod
    def get_by_name(cls, item_name):
        connection = cls.__make_connection()
        try:
            with connection.cursor() as cursor:
                cursor.execute(
                    "SELECT * FROM menu_items WHERE LOWER(item_name) = %s",
                    (item_name,)
                )
                result = cursor.fetchone()
                return result
        except psycopg2.DatabaseError as e:
            print(f"Database error: {e}")
            return None
        finally:
            connection.close()

    @classmethod
    def all_items(cls):
        connection = cls.__make_connection()
        try:
            with connection.cursor() as cursor:
                cursor.execute("SELECT * FROM menu_items")
                result = cursor.fetchall()
                return result
        except psycopg2.DatabaseError as e:
                print(f"Database error: {e}")
                return None
        finally:
            connection.close()

    @classmethod
    def __make_connection(cls):
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