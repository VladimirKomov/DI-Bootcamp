# Write a loop that asks a user to enter a series of pizza toppings, 
# when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add 
# that topping to their pizza.
# Upon exiting the loop print all the toppings on 
# the pizza pie and what the total price is (10 + 2.5 for each topping).

str_input = ""
list_toppings = []

while True:
    str_input = input("Enter a topping :")
    if str_input == "quit":
        break
    print(f"You’ll add {str_input} to the pizza")
    list_toppings.append(str_input)

print(f"{list_toppings} the total price is {10 + len(list_toppings) * 2.5}")
