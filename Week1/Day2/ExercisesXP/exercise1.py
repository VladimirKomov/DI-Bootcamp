# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = {17, 19, 23, 29}
my_fav_numbers.add(31)
my_fav_numbers.add(37)
my_fav_numbers.discard(37)

friend_fav_numbers = {23, 29, 31, 37}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)


