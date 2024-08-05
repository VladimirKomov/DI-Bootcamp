# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

is_not_my_name = True
while is_not_my_name:
    user_name = input("Your name: ")
    is_not_my_name = (user_name != "Vova")