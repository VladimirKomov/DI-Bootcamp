# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples

# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"

str_input = input("I need a string :")
list_imput = list(str_input)
i = 0
while True:
    if len(list_imput) > 1 and len(list_imput) > i + 1:
        if list_imput[i] == list_imput[i + 1]:
            list_imput.pop(i)
        else:
            i += 1
    else:
        break
print("".join(list_imput))
