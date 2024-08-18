# 1
# def display_message():
#     print("I am learning python")
#
# display_message()
#
# 2
# def favorite_book(title: str):
#     print(f"One of my favorite books is {title}")
#
# favorite_book("Alice in Wonderland")
# favorite_book("Fight club")
#
# 3
# def describe_city(city: str, country: str = "Israel"):
#     print(f"{city} is in {country}")
#
#
# print(describe_city("Moscow", "Russia"))
# print(describe_city("Tel_Aviv"))
#
# 4
# def compare_number_random(number: int):
#     random_number = random.randint(1, 100)
#     if number == random_number:
#         print("Success")
#     else:
#         print(f"Fail: {number} and {random_number} aren't the same. Try again, if you have enough free time.")
#
# compare_number_random(50)
#
# 5
# def make_shirt(size: str = "XXL", text: str = "I love Python"):
#     print(f"The size of the shirt is {size} and the text is {text}")
#
#
# make_shirt("M", "Test")
# make_shirt()
# make_shirt("M")
# make_shirt("S", "I hate CSS")
# make_shirt(text="Java the best", size="L")
#
# 6
# def show_magicians(names: list):
#     for name in names:
#         print(name)
#
# def make_great(names: list):
#     for i in range(len(names)):
#         names[i] = f"the Great {names[i]}"
#
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# show_magicians(magician_names)
# make_great(magician_names)
# show_magicians(magician_names)


# 7
# import random
#
# months = {
#     1: "January",
#     2: "February",
#     3: "March",
#     4: "April",
#     5: "May",
#     6: "June",
#     7: "July",
#     8: "August",
#     9: "September",
#     10: "October",
#     11: "November",
#     12: "December"
# }
#
#
# def get_season(month: int) -> str:
#     if month in [12, 1, 2]:
#         return "Winter"
#     elif month in [3, 4, 5]:
#         return "Spring"
#     elif month in [6, 7, 8]:
#         return "Summer"
#     elif month in [9, 10, 11]:
#         return "Autumn"
#     else:
#         raise ValueError("This is not the number of the month, only 1 - 12")
#
#
# def get_random_temp(season: str) -> float:
#     degree = 0
#     if season == "Winter":
#         degree = random.uniform(-10.0, 16.0)
#     elif season == "Spring":
#         degree = random.uniform(17.0, 23.0)
#     elif season == "Summer":
#         degree = random.uniform(26.0, 40.0)
#     elif season == "Autumn":
#         degree = random.uniform(20.0, 30.0)
#     else:
#         raise ValueError("The seasons can be 'winter', 'spring', 'summer', 'autumn'.")
#     return degree
#
#
# def main():
#     number_month = int(input("Enter the month number :"))
#     season = get_season(number_month)
#     degree = get_random_temp(season)
#     print(f"The temperature right now is {degree} degrees Celsius.")
#     if degree < 0:
#         print("Brrr, that’s freezing! Wear some extra layers today")
#     if 0 <= degree < 16:
#         print("Quite chilly! Don’t forget your coat")
#     if 16 <= degree <= 23:
#         print("It's warm enough! Can take a jacket")
#     if 24 <= degree < 32:
#         print("Warm! Can go to the sea")
#     if 32 <= degree <= 40:
#         print("Too hot! Drink more water")
#
#
# main()

# 8
# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]
#
# count_right_answer = 0
# count_wrong_answer = 0
# dict_wrong_answers = {}
#
#
# def ask_questions():
#     global count_right_answer
#     global count_wrong_answer
#     count_right_answer = 0
#     count_wrong_answer = 0
#     dict_wrong_answers.clear()
#     for question in data:
#         answer = input(f"{question["question"]} :")
#         if answer.lower() == question.get("answer").lower():
#             count_right_answer += 1
#         else:
#             count_wrong_answer += 1
#             dict_wrong_answers[question["answer"]] = answer
#
#
# def print_result():
#     print(f"Right answers :{count_right_answer}, wrong_answer: {count_wrong_answer}")
#
#
# def print_answers():
#     if len(dict_wrong_answers) == 0:
#         print("All your answers correct!")
#     else:
#         for key, value in dict_wrong_answers.items():
#             print(f"Correct answer: {key}, your answer {value}")
#
#
# while count_wrong_answer == 0 or count_wrong_answer > 3:
#     if count_wrong_answer == 0:
#         print("Let's get started.")
#     elif count_wrong_answer > 3:
#         input_agen = input(f"You have more than 3 ({count_wrong_answer}) "
#                            f"incorrect answers, try agen YES - 'y' NO - 'n' :")
#         if input_agen.lower() != "y":
#             break
#     ask_questions()
#     print_result()
#     print_answers()
