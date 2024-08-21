# In the file menu_item.py, create a new class called MenuItem, 
# the attributes should be the name and price of each item.

# Create several methods (save, delete, update) these methods will 
# allow a user to save, delete and update items from the Menu_Items table. 
# The update method can update the name as well as the price of an item.

class MenuItem:
    def __init__(self, item_name, item_price):
        self.item_name = item_name
        self.item_price = item_price

    def save(self, item_name: str):
        self.item_name = item_name

    def delete(self, ):
        pass

    def update(self):
        pass

    def __make_connection(self):
        config = configparser.ConfigParser()
        config.read('config.ini')

        connection = psycopg2.connect(
            host=config['database']['host'],
            database=config['database']['database'],
            user=config['database']['user'],
            password=config['database']['password']
        )
        return connection
        