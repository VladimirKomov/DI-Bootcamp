# Using this REST Countries API, create the functionality 
# which will write 10 random countries to your database.

import configparser
import os
import random
import psycopg2
import requests

class CountryManager:

    @classmethod
    def get_countries(cls, count: int = 10):
        all_countries = cls.__load_countries()
        random_countries = cls.__get_random_countries_for_base(all_countries, count)
        cls.__save_countries(random_countries)

    @staticmethod
    def __load_countries() -> list:
        try:
            response = requests.get("https://restcountries.com/v3.1/all")
            response.raise_for_status()
            all_countries = response.json()
            return all_countries
        except requests.exceptions.RequestException as e:
            print(f'Error loading countries: {e}')
            return []

    @staticmethod
    def __get_random_countries_for_base(all_countries: list, count: int = 10) -> list:
        random_countries = random.sample(all_countries, count)
        country_data = [
            (
                country.get('name', {}).get('common', 'Unknown'),
                ', '.join(country.get('capital', ['Unknown'])) if 'capital' in country else 'Unknown',
                country.get('flags', {}).get('png', 'Unknown'),
                country.get('subregion', 'Unknown'),
                country.get('population', 0)
            )
            for country in random_countries
        ]
        return country_data

    @staticmethod
    def __save_countries(country_data: list) -> bool:
        connection = CountryManager.__make_connection()
        try:
            with connection.cursor() as cursor:
                cursor.executemany(
                    "INSERT INTO countries (name, capital, flag, subregion, population)" 
                    "VALUES (%s, %s, %s, %s, %s)",
                    country_data
                )
            connection.commit()
        except psycopg2.DatabaseError as e:
            print(f"Database error: {e}")
            connection.rollback()
            return False
        finally:
            connection.close()
        return True

    @staticmethod
    def __make_connection() -> psycopg2.extensions.connection:
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
    
CountryManager.get_countries()