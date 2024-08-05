# Recap – What is a float? What is the difference between an integer and a float?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?


# This is a number that has a decimal point. 
# It is used to represent real numbers that can have a fractional part.
containings = []
fist_number = 1.5
for i in range(8):
    containings.append(fist_number + (i * 0.5))
print(containings)

containings = [fist_number + 0.5 * i for i in range(8)]
print(containings)