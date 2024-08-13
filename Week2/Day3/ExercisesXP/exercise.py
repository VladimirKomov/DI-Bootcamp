# # 1 ################
# class Currency:
#
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount
#
#     #Your code starts HERE
#     def __str__(self) -> str:
#         return f'{self.amount} {self.currency}{'s' * (self.amount > 1)}'
#
#     def __int__(self) -> int:
#         return self.amount
#
#     def __repr__(self) -> str:
#         return self.__str__()
#
#     def __add__(self, other):
#         result = 0
#         if isinstance(other, (int, float)):
#             result = self.amount + other
#         if isinstance(other, Currency):
#             if self.currency == other.currency:
#                 result = self.amount + other.amount
#             else:
#                 raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
#         return result
#
#     def __iadd__(self, other: int) -> 'Currency':
#         if isinstance(other, (int, float)):
#             self.amount += other
#         if isinstance(other, Currency):
#             if self.currency == other.currency:
#                 self.amount = self.amount + other.amount
#             else:
#                 raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
#         return self
#
#
#
# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)
# print(str(c1))
# # '5 dollars'
# print(int(c1))
# # 5
# print(repr(c1))
# # '5 dollars'
# print(c1 + 5)
# # 10
# print(c1 + c2)
# # 15
# print(c1)
# # 5 dollars
# c1 += 5
# print(c1)
# # 10 dollars
# c1 += c2
# print(c1)
# # 20 dollars
# c1 + c3
# # TypeError: Cannot add between Currency type <dollar> and <shekel>
# import random
# import string

# 3 ########################

# str_letters = string.ascii_uppercase
# list_latters = []
# for i in range(5):
#     list_latters.append(random.choice(str_letters))
# print(''.join(list_latters))

# 4 ##########################
# import datetime
#
#
# def print_data():
#     print(datetime.date.today())
#
# print_data()


# 5 #########################
# import datetime
#
# now = datetime.datetime.now().replace(microsecond=0)
# newYear = datetime.datetime(now.year + 1, 1, 1)
# def subtraction_datas(a, b):
#     return a - b
#
# c = subtraction_datas(newYear, now)
# print(f'the 1st of January is {c} hours).')


# 6 ############################
# import datetime
#
# now = datetime.datetime.now().replace(microsecond=0)
# birth_day = datetime.datetime(1984, 1, 1)
# def subtraction_datas(a, b):
#     c = a - b
#     minutes = c.total_seconds() // 60
#     return int(minutes)
#
# c = subtraction_datas(now, birth_day)
# print(f'{c} minutes the user lived in his life')



# 7 #############################
#
# from faker import Faker
#
# users = []
# faker = Faker()
# def make_list(list, count):
#     for i in range(count):
#         list.append({"name" : faker.name(), "adress" : faker.address(), "langage_code" : faker.language_code()})
#
# make_list(users, 10)
# print(users)