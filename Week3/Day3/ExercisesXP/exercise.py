# 1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
#
# dictionarie = dict(zip(keys, values))
# print(dictionarie)
#
# 2
# def calculate(dict_for_calculate):
#     sum = 0
#     for age in dict_for_calculate.values():
#         if 3 < age < 12:
#             sum += 10
#         if age >= 12:
#             sum += 15
#     return sum
#
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# print(calculate(family))
#
# # ----input----
# dict_input = {}
# print(f"I need Name and Age, for exit input exit")
# while True:
#     name = input("Name or Exit:")
#     if name.lower() == "exit":
#         break
#     age = int(input("Age :"))
#     dict_input[name] = age
# print(calculate(dict_input))
#
# 3
# brand = {}
# brand["name"] = "Zara"
# brand["creation_date"] = 1975
# brand["creator_name"] = "Amancio Ortega Gaona"
# brand["type_of_clothes"] = ["men", "women", "children", "home"]
# brand["international_competitors"] = ["Gap", "H&M", "Benetton"]
# brand["number_stores"] = 7000
# brand["major_color"] = {"France": ["blue"], "Spain": ["red"], "US": ["pink", "green"]}
#
# brand["number_stores"] = 2
#
# print(f"Who are Zaras clients  {brand.get("type_of_clothes")}")
#
# brand["country_creation"] = "Spain"
#
# if "international_competitors" in brand:
#     brand["international_competitors"].append("Desigual")
#
# brand.pop("creation_date")
#
# print(brand["international_competitors"][-1])
# print(brand["major_color"]["US"])
# print(len(brand))
# print(brand.keys())
#
# more_on_zara = {"creation_date" : 1975, "number_stores" : 10000}
#
# brand.update(more_on_zara)
#
# print(brand["number_stores"])
#
# 4
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
#
# disney_users_A = {}
# for i in range(len(users)):
#     disney_users_A[users[i]] = i
# print(disney_users_A)
#
# disney_users_B = {}
# for i in range(len(users)):
#     disney_users_B[i] = users[i]
# print(disney_users_B)
#
# disney_users_C = {}
# sorted_users = users.copy()
# sorted_users.sort()
# for i in range(len(sorted_users)):
#     disney_users_C[sorted_users[i]] = i
# print(disney_users_C)
#
# disney_users_contain_i = {}
# for i in range(len(users)):
#     if "i" in users[i]:
#         disney_users_contain_i[users[i]] = i
# print(disney_users_contain_i)
#
# disney_users_start_m_p = {}
# for i in range(len(users)):
#     if users[i].lower().startswith(("m", "p")):
#         disney_users_start_m_p[users[i]] = i
# print(disney_users_start_m_p)