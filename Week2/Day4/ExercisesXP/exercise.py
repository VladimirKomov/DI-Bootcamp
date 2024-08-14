# import random
#
# # 1 ######################
# path = "resources/"
# lines = []
#
#
# def get_words_from_file(path: str):
#     with open(path + 'sowpods.txt') as f:
#         for line in f:
#             lines.append(line.strip().lower())
#
#
# def get_random_sentence(length: int):
#     random_lines = []
#     for i in range(length):
#         random_lines.append(random.choice(lines))
#     print(" ".join(random_lines))
#
# def main():
#     print("We create a random sentence generator. "
#           "We will do this by asking the user how long the sentence "
#           "should be and then printing the generated sentence.")
#     input_count = int(input("How many words you need (between 2 and 20):"))
#     if  2 <= input_count < 20:
#         get_words_from_file(path)
#         get_random_sentence(input_count)
#     else:
#         raise ValueError("Acceptable values are: an integer between 2 and 20.")
#
# main()
#
# 2 ################################
# import json
#
# path = "resources/"
#
# sampleJson = """{
#    "company":{
#       "employee":{
#          "name":"emma",
#          "payable":{
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""
#
# data  = json.loads(sampleJson)
# print(data)
# salary = data["company"]["employee"]["payable"]["salary"]
# print(salary)
# data["company"]["employee"]["birth_date"] = None
# print(data)
# # updated_json = json.dumps(data, indent=2, sort_keys=True)
# # print(updated_json)
#
# with open(path + "updated_json.json", "w") as f:
#     json.dump(data, f, indent=2, sort_keys=True)
#
#
#
#
#
