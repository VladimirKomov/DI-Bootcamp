# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and 
# want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, 
# if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

cout_members = int(input("Hi family, how many tickets :"))
sum = 0
for i in range(cout_members):
    age = int(input(f"Age of participant number {i+1}:"))
    if age < 3:
        sum += 0
    elif age > 2 and age < 12:
        sum += 10
    else:
        sum += 15

print(f"The total cost is {sum}") 

# -----------------------------------------------------------------------------------------
list_teens = ["Harry James Potter", "Ronald Bilius «Ron» Weasley", "Hermione Jean Granger"]
list_bad_kids = []
for i in range(len(list_teens)):
    age = int(input(f"How old are you, {list_teens[i]}:"))
    if age > 16 and age < 21:
        list_bad_kids.append(list_teens[i])
for i in range(len(list_bad_kids)):
    list_teens.remove(list_bad_kids[i])

print(list_teens)    
    
