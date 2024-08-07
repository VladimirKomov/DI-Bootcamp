# 1
# my_fav_numbers = {17, 19, 23, 29}
# my_fav_numbers.add(31)
# my_fav_numbers.add(37)
# my_fav_numbers.discard(37)
#
# friend_fav_numbers = {23, 29, 31, 37}
#
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
#
# print(our_fav_numbers)
#
# 2
# # No, it's imposible
#
# 3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
#
# basket.remove("Banana")
# basket.append("Kiwi")
# basket.append("Apples")
#
# count = 0
# for fruit in basket:
#     if fruit.lower() == "apples".lower():
#         count += 1
#
# basket.clear()
#
# print(basket)
#
# 4
# containings = []
# fist_number = 1.5
# for i in range(8):
#     containings.append(fist_number + (i * 0.5))
# print(containings)
#
# containings = [fist_number + 0.5 * i for i in range(8)]
# print(containings)
#
# 5
# for i in range(1, 21):
#     print(i)
#
# print("----even index----")
# for i in range(1, 21):
#     if (i % 2 == 0):
#         print(i)
#
# 6
# is_not_my_name = True
# while is_not_my_name:
#     user_name = input("Your name: ")
#     is_not_my_name = (user_name != "Vova")
#
# 7
# str_favorite_fruits = input("Your favorite fruits (to separate the fruits with a single space) :")
# list_favorite_fruits = list(str_favorite_fruits.split(" "))
#
# str_fruit = input("Input a name of any fruit :")
# if list_favorite_fruits.count(str_fruit) != 0:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy")
#
# 8
# str_input = ""
# list_toppings = []
#
# while True:
#     str_input = input("Enter a topping :")
#     if str_input == "quit":
#         break
#     print(f"You’ll add {str_input} to the pizza")
#     list_toppings.append(str_input)
#
# print(f"{list_toppings} the total price is {10 + len(list_toppings) * 2.5}")
#
# 9
# cout_members = int(input("Hi family, how many tickets :"))
# sum = 0
# for i in range(cout_members):
#     age = int(input(f"Age of participant number {i+1}:"))
#     if age > 2 and age < 12:
#         sum += 10
#     elif age >= 12:
#         sum += 15
#
# print(f"The total cost is {sum}")
#
# # -----------------------------------------------------------------------------------------
# list_teens = ["Harry James Potter", "Ronald Bilius «Ron» Weasley", "Hermione Jean Granger"]
# list_bad_kids = []
# for i in range(len(list_teens)):
#     age = int(input(f"How old are you, {list_teens[i]}:"))
#     if age > 16 and age < 21:
#         list_bad_kids.append(list_teens[i])
# for i in range(len(list_bad_kids)):
#     list_teens.remove(list_bad_kids[i])
#
# print(list_teens)
#
# 10
# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
#                    "Pastrami sandwich", "Egg sandwich", "Chicken sandwich",
#                    "Pastrami sandwich"]
# while sandwich_orders.count("Pastrami sandwich") > 0:
#     sandwich_orders.remove("Pastrami sandwich")
#
# finished_sandwiches = []
# while len(sandwich_orders) > 0:
#     sandwich = sandwich_orders[0]
#     finished_sandwiches.append(sandwich)
#     sandwich_orders.remove(sandwich)
#
# for i in range(len(finished_sandwiches)):
#     print(f"I made your {finished_sandwiches[i].lower()}")