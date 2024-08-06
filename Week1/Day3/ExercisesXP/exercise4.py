# Use this list :
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# Analyse these results :
# #1/
# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
# #2/
# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
# #3/
# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
disney_users_A = {}
for i in range(len(users)):
    disney_users_A[users[i]] = i
print(disney_users_A)

# Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# #2/
# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
disney_users_B = {}
for i in range(len(users)):
    disney_users_B[i] = users[i]
print(disney_users_B)

# Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
# #3/
# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
disney_users_C = {}
sorted_users = users.copy()
sorted_users.sort()
for i in range(len(sorted_users)):
    disney_users_C[sorted_users[i]] = i
print(disney_users_C)

# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.
disney_users_contain_i = {}
for i in range(len(users)):
    if "i" in users[i]:
        disney_users_contain_i[users[i]] = i
print(disney_users_contain_i)

# The characters, which names start with the letter “m” or “p”.
disney_users_start_m_p = {}
for i in range(len(users)):
    if users[i].lower().startswith(("m", "p")):
        disney_users_start_m_p[users[i]] = i
print(disney_users_start_m_p)