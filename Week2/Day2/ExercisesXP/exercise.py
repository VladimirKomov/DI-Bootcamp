# # 1 ################## 1
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals
#
#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())
#
# class Cat():
#     is_lazy = True
#
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#
#     def walk(self):
#         return f'{self.name} is just walking around'
#
# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
#
# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
#
#
# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
#
# all_cats = [Bengal("Bengal", 3), Chartreux("Chartreux", 4), Siamese("Siamese", 5)]
# sara_pets = Pets(all_cats)
# sara_pets.walk()
import random


# # 2 ################# 2
# class Dog:
#     def __init__(self, name: str, age: int, weight: int):
#         self.name = name
#         self.age = age
#         self.weight = weight
#
#     def bark(self) -> str:
#         return f"{self.name} is barking"
#
#     def run_speed(self) -> float:
#         return (self.weight / self.age * 10)
#
#     def fight(self, other_dog: "Dog") -> bool:
#         winner, loser = (self, other_dog) if self.__is_win(other_dog) else (other_dog, self)
#         return f"Won {winner.name}, lose {loser.name}"
#
#     def __is_win(self, other_dog: "Dog") -> bool:
#         return (self.run_speed() * self.weight) > (other_dog.run_speed() * other_dog.weight)
#
#
# dog_1 = Dog("Dog_1", random.randint(1, 20), random.randint(1, 50))
# dog_2 = Dog("Dog_2", random.randint(1, 20), random.randint(1, 50))
# dog_3 = Dog("Dog_3", random.randint(1, 20), random.randint(1, 50))
# dogs = [dog_1, dog_2, dog_3]
# for i, dog in enumerate(dogs):
#     print(dog.bark())
#     print(dog.run_speed())
#     random_index = random.choice([index for index in range(len(dogs)) if index != i])
#     print(dog.fight(dogs[random_index]))

# 4 ####################### 4

# class Family:
#     def __init__(self, members: list, last_name: str):
#         self.members = members
#         self.last_name = last_name
#
#     def born(self, **kwargs):
#         self.members.append(kwargs)
#         print(f"new member is {self.members[-1]}")
#
#     def is_18(self, name_member: str) -> bool:
#         for member in self.members:
#             if member["name"] == name_member and member["age"] >= 18:
#                 return True
#         return False
#
#     def family_presentation(self):
#         print(f"The {self.last_name} family:")
#         for member in self.members:
#             print(f"{member}")


# members = [
#     {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
#     {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
#     ]

# family = Family(members, "Komov")

# family.born(name="cat", age=3, gender="Female", is_child=False)
# family.born(name="dog", age=5, gender="Male", is_child=False)

# for member_family in family.members:
#     print(f"{member_family['name']} is more than 18: {family.is_18(member_family['name'])}")
# family.family_presentation()

# 5 ############################ 5
# class TheIncredibles(Family):
#
#     def use_power(self):
#         for member in self.members:
#             if self.is_18(member["name"]):
#                 print(f"{member["name"]} can {member["power"]}")
#             else:
#                 raise PermissionError(f"{member["name"]} can't {member["power"]}")
#
#     def incredible_presentation(self):
#         print("“*Here is our powerful family **”")
#         self.family_presentation()
#
# sup_members = [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#     ]
#
# sup_family = TheIncredibles(sup_members, "Homelander")
# sup_family.incredible_presentation()
# sup_family.born(name="Jack", age=15, gender="Male", is_child=True, power="Unknown Power", incredible_name="BabyJack")
# sup_family.incredible_presentation()
          


