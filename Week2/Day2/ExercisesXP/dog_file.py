# import random
#
# from exercise import Dog
#
# # 3 ########################## 3
#
# class PetDog(Dog):
#     tricks = ["does a barrel roll", "stands on his back legs",
#               "shakes your hand", "plays dead"]
#
#     def __init__(self, name: str, age: int, weight: int, trained: bool = False):
#         super().__init__(name, age, weight)
#         self.trained = trained
#
#     def train(self):
#         print(super().bark())
#         self.trained = True
#
#     def play(self, *args: Dog):
#         dog_names = ", ".join([dog.name for dog in args])
#         print(f"{dog_names} all play together”")
#
#     def do_a_trick(self):
#         print(f"{self.name} {random.choice(PetDog.tricks)}")
#
#
# dog_1 = Dog("Dog_1", random.randint(1, 20), random.randint(1, 50))
# dog_2 = Dog("Dog_2", random.randint(1, 20), random.randint(1, 50))
# petDog = PetDog("PetDog_1", random.randint(1, 20), random.randint(1, 50))
# dogs = [dog_1, dog_2, petDog]
# for i, dog in enumerate(dogs):
#     print(dog.bark())
#     print(dog.run_speed())
#     random_index = random.choice([index for index in range(len(dogs)) if index != i])
#     print(dog.fight(dogs[random_index]))
#     if isinstance(dog, PetDog):
#         dog.train()
#         dog.play(*(play_dog for play_dog in dogs))
#         dog.do_a_trick()
#
