# 1. Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.
# 2. Then, print the first and last characters of the given text.
# 3. Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld
# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:
# Hlrolelwod

import random

def print_string(str_print):
    for steap in range(len(str_print)):
        print(str_print[0:steap+1])

def shuffle_string(str_shuffle):
    list_str = list(str_shuffle)
    random.shuffle(list_str)
    str_shuffle = "".join(list_str)
    return str_shuffle


str_input = input("Enter a string of exactly 10 characters :")

if len(str_input) < 10:
    print("String not long enough")
elif len(str_input) > 10:
    print("String too long")
elif len(str_input) == 10:
    print("Perfect string")
    print_string(str_input)
    print("-----shuffle-----")
    str_shuffle = shuffle_string(str_input)
    print_string(str_shuffle)
else:
    print("String impossible")

   