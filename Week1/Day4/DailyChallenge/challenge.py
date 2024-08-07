str_matrix = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""

list_matrix = str_matrix.split("\n")
list_double_matrix = []

for element in list_matrix:
    list_double_matrix.append(list(element))

# starting coordinates
x = 0
y = 0
# final coordinates
end_x = len(list_double_matrix[0])
end_y = len(list_double_matrix)
result = []

# Solution #1
while x < end_x:
    element = list_double_matrix[y][x]
    if element.isalpha():
        result.append(element)
    elif result and result[-1] != " ":
        result.append(" ")
    if y < end_y and x < end_x:
        y += 1
    if y == end_y and x < end_x:
        y = 0
        x += 1

print("".join(result))

# Solution #2
# starting coordinates
x = 0
y = 0
result_2 = []
for x in range(end_x):
    for y in range(end_y):
        element = list_double_matrix[y][x]
        if element.isalpha():
            result_2.append(element)
        elif result_2 and result_2[-1] != " ":
            result_2.append(" ")

print("".join(result_2))
