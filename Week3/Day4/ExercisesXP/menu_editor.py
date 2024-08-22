# Create a file called menu_editor.py , which will have the following functions:
# show_user_menu() - this function should display the program menu 
# (not the restaurant menu!), and ask the user to :
# View an Item (V)
# Add an Item (A)
# Delete an Item (D)
# Update an Item (U)
# Show the Menu (S)
# Call the appropriate function that matches the user’s input.

from menu_item import MenuItem
from menu_manager import MenuManager


def show_user_menu() -> str:
    user_input = input('\nChoose an option: \n'
                    '   View an Item (v) \n'
                    '   Add an Item (a) \n'
                    '   Delete an Item (d) \n'
                    '   Update an Item (u) \n'
                    '   Show the Menu (s) \n'
                    '   Exit (e)\n'
                    '   :').strip().lower()
    return user_input 
    
def main():
    user_input = show_user_menu()
    if user_input == 'v':
        find_item_by_name()
        main()
    elif user_input == 'a':
        add_item_to_menu()
        main()
    elif user_input == 'd':
        remove_item_from_menu()
        main()
    elif user_input == 'u':
        update_item_from_menu()
        main()
    elif user_input == 's':
        show_restaurant_menu()
        main()
    elif user_input == 'e':
        print('Goodbye!')
    else:
        print('Invalid option')
        main()   


# add_item_to_menu() - this function should ask the user to 
# input the item’s name and price. This function will not interact 
# with the menu itself, but simply create a MenuItem object and call 
# the appropriate function from the MenuItem object.
# If the item was added successfully print a message which states: 
# item was added successfully.

def add_item_to_menu():
    item_name = input('(Adding) Enter the item name: ').strip()
    item_price = int(input('(Adding) Enter the item price: '))
    menu_item = MenuItem(item_name, item_price)
    if menu_item.save():
        print('Item was added successfully')

# remove_item_from_menu()- this function should ask the user to 
# input the name of the item they want to remove from the restaurant’s menu. 
# This function will not interact with the menu itself, but simply create a 
# MenuItem object and call the appropriate function from the MenuItem object.
# If the item was deleted successfully – print a message to let the user know 
# this was completed.
# If not – print a message which states that there was an error.

def remove_item_from_menu():
    item_name = input('(Deleting) Enter the item name: ').strip()
    menu_item = MenuItem(item_name=item_name)
    if menu_item.delete():
        print('Item was deleted successfully')
    else:
        print('There was an error')

# update_item_from_menu()- this function should ask the user to input 
# the name and price of the item they want to update from the restaurant’s menu, 
# as well as to input the name and price they want to change them with. 
# This function will not interact with the menu itself, but simply 
# create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was updated successfully – print a message to let 
# the user know this was completed.
# If not – print a message which states that there was an error.

def update_item_from_menu():
    item_name = input('(Updating) Enter the item name: ').strip()
    item_price = int(input('(Updating) Enter the item price: '))
    menu_item = MenuItem(item_name, item_price)
    if menu_item.update():
        print('Item was updated successfully')
    else:
        print('There was an error')

def show_restaurant_menu():
    menu_items = MenuManager.all_items()
    print('Menu:')
    for item in menu_items:
        print(f'    {item[1]} - {item[2]}')

def find_item_by_name():
    item_name = input('(Finding item) Enter the item name: ').strip().lower()
    menu_item = MenuManager.get_by_name(item_name)
    print('Item:')
    if menu_item:
        print(f'    {menu_item[1]} - {menu_item[2]}')
    else:
        print(' Item not found')

main()



    
    