# Write code that will ask the user for their height in centimeters.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

int_height = input("Your height? :")
int_goal = 145

if int(int_height) > int(int_goal):
    print("They are tall enough to ride.")
else:
    print("They need to grow some more to ride.")