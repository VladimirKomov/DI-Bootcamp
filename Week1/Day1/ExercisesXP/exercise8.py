# Write code that asks the user for their 
# name and determines whether or not you have the same name, 
# print out a funny message based on the outcome.

user_name = input("What is your name :")
my_name = "Vova"

if (user_name == my_name):
    print(f"{user_name} is {my_name}") 
else:
    print(f"{user_name} is not {my_name}")
