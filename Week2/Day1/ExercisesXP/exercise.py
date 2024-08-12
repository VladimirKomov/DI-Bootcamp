import random


# # 1
# class Cat:
#     def __init__(self, cat_name: str, cat_age: str):
#         self.name = cat_name
#         self.age = cat_age
#
#
# def find_oldest_cat(cats: list) -> Cat:
#     oldest_cat = max(cats, key=lambda cat: cat.age)
#     print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")
#
#
# cats = []
# for i in range(1, 4):
#     cats.append(Cat(f"Cat_name {i}", random.randint(1, 20)))
#
# find_oldest_cat(cats)


# # 2
# class Dog:
#     def __init__(self, name: str, height: int):
#         self.name = name
#         self.height = height
#     def bark(self):
#         print(f"{self.name} goes woof!")
#
#     def jump(self):
#         print(f"{self.name} jumps {self.height * 2} cm high!")
#
#     def __str__(self):
#         return f"name={self.name} heigt={self.height}"
#
#     def info(self):
#         print(self)
#
#
# davids_dog = Dog("Rex", 50)
# davids_dog.info()
# davids_dog.jump()
# davids_dog.bark()
#
# sarahs_dog = Dog("Teacup", 20)
# sarahs_dog.info()
# sarahs_dog.jump()
# sarahs_dog.bark()
#
# dogs = [davids_dog, sarahs_dog]
# highest = max(dogs, key=lambda dog : dog.height)
# print(highest.name)


# #3
# class Song:
#     def __init__(self, lyrics: list):
#         self.lyrics = lyrics
#
#     def sing_me_a_song(self):
#         list(map(print, self.lyrics))
#
# stairway = Song(["There’s a lady who's sure",
#                 "all that glitters is gold",
#                 "and she’s buying a stairway to heaven"])
#
# stairway.sing_me_a_song()


# #4
# class Zoo:
#     def __init__(self, zoo_name: str):
#         self.name = zoo_name
#         self.dict_animals = {}
#         self.animals = []
#
#     def add_animal(self, new_animals):
#         self.animals.extend(new_animals)
#
#     def get_animals(self):
#         list(map(print, self.animals))
#
#     def sell_animal(self, animal_sold):
#         if animal_sold in self.animals:
#             self.animals.remove(animal_sold)
#
#     def sort_animals(self):
#         animals_sorted = sorted(self.animals)
#         group_number = 1
#         current_letter = animals_sorted[0][0] if animals_sorted else None
#
#         for animal in animals_sorted:
#             if animal[0] != current_letter:
#                 group_number += 1
#                 current_letter = animal[0]
#             if group_number not in self.dict_animals:
#                 self.dict_animals[group_number] = []
#             self.dict_animals[group_number].append(animal)
#
#     def get_groups(self):
#         print(self.dict_animals)
#
#
# ramat_gan_safari = Zoo("ramat_gan_safari")
# animals = []
# input_animal = ""
# while input_animal != 'exit':
#     input_animal = input("Which animal should we add to the zoo, for exit input 'exit': ")
#     if input_animal != 'exit':
#         animals.append(input_animal)
#
# ramat_gan_safari.add_animal(animals)
# input_sell = input("Which animal should we sell: ")
#
# ramat_gan_safari.sell_animal(input_sell)
# ramat_gan_safari.sort_animals()
# ramat_gan_safari.get_groups()

