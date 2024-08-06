# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
#
# Given the following object:
#
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
#
#
# How much does each family member have to pay ?
#
# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the
# provided family variable (Hint: ask the user for names and ages and add them
# into a family dictionary that is initially empty).

def calculate(dict_for_calculate):
    sum = 0
    for age in dict_for_calculate.values():
        if 3 < age < 12:
            sum += 10
        if age >= 12:
            sum += 15
    return sum

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
print(calculate(family))

# ----input----
dict_input = {}
print(f"I need Name and Age, for exit input exit")
while True:
    name = input("Name or Exit:")
    if name.lower() == "exit":
        break
    age = int(input("Age :"))
    dict_input[name] = age
print(calculate(dict_input))