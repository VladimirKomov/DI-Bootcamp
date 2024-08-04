# Write code that calculates the result of:
#  (99^3)*8 (meaning 99 to the power of 3, times 8)

def my_math(x, y):
    int_result = 1
    for step in range(y):
        int_result = int_result * x  
    return int_result

print(my_math(99, 3)*8)